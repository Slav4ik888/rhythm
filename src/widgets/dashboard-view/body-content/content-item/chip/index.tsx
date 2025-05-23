import { FC, memo, useMemo } from 'react';
import { ViewItem, ViewItemId, ChipContainer, stylesToSx, useDashboardView } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';
import { CONDITION_TYPE, DashboardConditionType, getConditionType } from 'entities/condition-type';
import { useDashboardData } from 'entities/dashboard-data';
import { useTheme } from 'app/providers/theme';
import { StatisticPeriodType } from 'entities/statistic-type';
import { useCompany } from 'entities/company';
import { getKod } from '../../../model/utils';



interface Props {
  item     : ViewItem
  onSelect : (id: ViewItemId) => void
}

/** Item chip */
export const ItemChip: FC<Props> = memo(({ item, onSelect }) => {
  const theme = useTheme();
  const { customSettings } = useCompany();
  const { activeEntities } = useDashboardData();
  const { entities } = useDashboardView();

  const { label, toolTitle, color, background } = useMemo(() => { 
    const kod  = getKod(entities, item);
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
      label      = customSettings?.periodType?.[period]?.title      || period;
      toolTitle  = customSettings?.periodType?.[period]?.title      || period;
      color      = customSettings?.periodType?.[period]?.color      || '#000'; // theme.palette.statisticPeriodTypeChip[period]?.color;
      background = customSettings?.periodType?.[period]?.background || '#eee'; // theme.palette.statisticPeriodTypeChip[period]?.background;
    }
    else if (type === 'company') {
      const company = kod ? activeEntities[kod]?.companyType : '' as string;
      label      = company;
      toolTitle  = company;
      color      = customSettings?.companyType?.[company]?.color      || '#000';
      background = customSettings?.companyType?.[company]?.background || '#eee';
    }
    else if (type === 'product') {
      const product = kod ? activeEntities[kod]?.productType : '' as string;
      label      = product;
      toolTitle  = product;
      color      = customSettings?.productType?.[product]?.color      || '#000';
      background = customSettings?.productType?.[product]?.background || '#eee';
    }
    else if (type === 'custom') {
      // TODO:
    }
    
    return { label, toolTitle, color, background };
  }, [item.settings, activeEntities, customSettings]);


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <ChipContainer
        label     = {label}
        toolTitle = {toolTitle}
        sx={{
          color,
          background,
          width  : stylesToSx(item?.styles)?.width,
          height : stylesToSx(item?.styles)?.height,
        }}
      />
    </ItemWrapper>
  )
});
