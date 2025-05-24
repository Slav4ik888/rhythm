import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Box } from '@mui/material';
import { f, pxToRem } from 'shared/styles';
import { StatisticPeriodType, StatisticPeriodTypeChip } from 'entities/statistic-type';
import { GetFromGlobalKod } from '../../base-features-components';



interface Props {
  kod        : string
  periodType : StatisticPeriodType
}

/** Kod item */
export const Kod: FC<Props> = memo(({ kod, periodType }) => {

  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Kod' toolTitle='Код статистики' />
      <Box sx={f('-c-c')}>
        <StatisticPeriodTypeChip
          type = {periodType}
          sx   = {{ root: { width: pxToRem(70), maxWidth: pxToRem(70), mr: 2 } }}
        />
        <GetFromGlobalKod showItemKod />
      </Box>
    </RowWrapper>
  )
});
