import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId, ChipContainer } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';
import { CONDITION_TYPE, DashboardConditionType, getConditionType } from 'entities/condition-type';
import { useDashboardData } from 'entities/dashboard-data';
import { useTheme } from 'app/providers/theme';
import { StatisticPeriodType } from 'entities/statistic-type';



interface Props {
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item chip */
export const ItemChip: FC<Props> = memo(({ item, onSelect }) => {
  const theme = useTheme();
  const { activeEntities, activeDates } = useDashboardData();

  const { label, toolTitle, color, background } = useMemo(() => { 
    const kod  = item.settings?.kod || '';
    const type = item.settings?.chipType || '';
    let label = 'Test label', toolTitle = 'Test toolTitle', color = '#fff', background = 'red';

    if (type === 'condition') {
      const condition = kod ? getConditionType(activeEntities[kod]?.data) : DashboardConditionType.NULL;
      label      = CONDITION_TYPE[condition].label;
      toolTitle  = CONDITION_TYPE[condition].description;
      color      = theme.palette.conditionTypeChip[condition]?.color;
      background = theme.palette.conditionTypeChip[condition]?.background;
    }
    else if (type === 'period') {
      const period = kod ? activeEntities[kod]?.periodType : '' as StatisticPeriodType;
      label      = period;
      toolTitle  = period;
      color      = theme.palette.statisticPeriodTypeChip[period]?.color;
      background = theme.palette.statisticPeriodTypeChip[period]?.background;
    }
    
    return { label, toolTitle, color, background };
  }, [item.settings, activeEntities]);


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <ChipContainer
        label     = {label}
        toolTitle = {toolTitle}
        sx        = {{ color, background }}
      />
    </ItemWrapper>
  )
});
