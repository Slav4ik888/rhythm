import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import { FlagByScheme } from '../../../base-features-components/flag-by-scheme';
import { GetFromGlobalKod } from '../../../base-features-components/get-from-global-kod';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { useDashboardData } from 'entities/dashboard-data';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  selectedItem : ViewItem | undefined
  disabled     : boolean
}

/** Вставка для RowSelectByField */
export const RowSelectKodChildren: FC<Props> = memo(({ selectedItem, disabled }) => {
  const { startEntities } = useDashboardData();
  const { fromGlobalKod: kod } = useDashboardView();

  return (
    <>
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
            sx   = {{ root: { width: pxToRem(70), maxWidth: pxToRem(70) } }}
          />
          {
            disabled && <Tooltip title={disabled ? 'Чтобы выбрать другой код, снимите галку с "fromGlobalKod".' : ''}>
              <GetFromGlobalKod type={selectedItem?.settings?.chipType} />
            </Tooltip>
          }
        </Box>)
      }
    </>
  )
});
