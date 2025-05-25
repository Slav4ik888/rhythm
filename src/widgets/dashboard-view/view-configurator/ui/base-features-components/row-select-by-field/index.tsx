import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { FlagByScheme } from '../flag-by-scheme';
import { SelectByField } from '../select-by-field';
import { GetFromGlobalKod } from '../get-from-global-kod';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { useDashboardData } from 'entities/dashboard-data';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string
  title        : string
  toolTitle    : string
  array        : string[] | any[] // any if component present
  component?   : FC<any> // Если нужен не стандартный компонент вместо item
}

export const RowSelectByField: FC<Props> = memo(({ selectedItem, scheme, title, toolTitle, array, component }) => {
  const { startEntities } = useDashboardData();
  const { fromGlobalKod: kod } = useDashboardView();

  const disabled = selectedItem?.settings?.fromGlobalKod;
  
  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      <Box sx={f('-c')}>
        {
          selectedItem?.type === 'box' && <>
            isGlobalKod
            <FlagByScheme
              scheme       = 'settings.isGlobalKod'
              title        = 'isGlobalKod'
              toolTitle    = 'Если true, то это kod, будет автоматически подтягиваться всем children у которых стоит галка (fromGlobalKod)'
              selectedItem = {selectedItem} 
              sx           = {{ root: { my: 2 } }}
            />
          </>
        }
        {
          ( selectedItem?.type === 'chip' ||
            selectedItem?.type === 'digitIndicator' ||
            selectedItem?.type === 'growthIcon') && (<Box sx={{ ...f('-c'), gap: 2, my: 2 }}>
            fromGlobalKod
            <FlagByScheme
              scheme       = 'settings.fromGlobalKod'
              title        = 'fromGlobalKod'
              toolTitle    = 'Если true, то kod будет автоматически подтягиваться от ближайшего parent у которых стоит галка (isGlobalKod)'
              selectedItem = {selectedItem} 
            />
            <StatisticPeriodTypeChip
              type = {startEntities[kod]?.periodType || ''}
              sx   = {{ root: { width: pxToRem(70), maxWidth: pxToRem(70), mr: 2 } }}
            />
            <Tooltip title={disabled ? 'Чтобы выбрать другой код, снимите галку с "fromGlobalKod".' : ''}>
              <GetFromGlobalKod />
            </Tooltip>
          </Box>)
        }
        {
          ! disabled && <SelectByField
            scheme       = {scheme}
            array        = {array}
            component    = {component}
            selectedItem = {selectedItem}
          />
        }
      </Box>
    </RowWrapper>
  )
});
