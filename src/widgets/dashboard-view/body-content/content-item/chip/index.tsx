import { FC, memo, useMemo } from 'react';
import { ViewItem, ViewItemId, ChipContainer, stylesToSx, useDashboardView, getKod } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';
import { CONDITION_TYPE, DashboardConditionType, getConditionKod, getConditionType } from 'entities/condition-type';
import { useDashboardData } from 'entities/dashboard-data';
import { useTheme } from 'app/providers/theme';
import { StatisticPeriodType } from 'entities/statistic-type';
import { useCompany } from 'entities/company';



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

  const { label, color, background } = useMemo(() => {
    const kod  = getKod(entities, item);
    const type = item.settings?.chipType || '';

    let label      = 'Test label';
    let color      = '#fff';
    let background = 'red';

    if (type === 'condition') {
      const conditionKode = getConditionKod(type, kod);
      const condition = conditionKode
        ? getConditionType(activeEntities[conditionKode]?.data) : DashboardConditionType.NULL;
      label      = CONDITION_TYPE[condition].label;
      color      = theme.palette.conditionTypeChip[condition]?.color;
      background = theme.palette.conditionTypeChip[condition]?.background;
    }
    else if (type === 'period') {
      const period = kod ? activeEntities[kod]?.periodType : '' as StatisticPeriodType;
      label      = customSettings?.periodType?.[period]?.title      || period;
      color      = customSettings?.periodType?.[period]?.color      || '#000'; // theme.palette.statisticPeriodTypeChip[period]?.color;
      background = customSettings?.periodType?.[period]?.background || '#eee'; // theme.palette.statisticPeriodTypeChip[period]?.background;
    }
    else if (type === 'company') {
      const company = kod ? activeEntities[kod]?.companyType : '' as string;
      label      = company;
      color      = customSettings?.companyType?.[company]?.color      || '#000';
      background = customSettings?.companyType?.[company]?.background || '#eee';
    }
    else if (type === 'product') {
      const product = kod ? activeEntities[kod]?.productType : '' as string;
      label      = product;
      color      = customSettings?.productType?.[product]?.color      || '#000';
      background = customSettings?.productType?.[product]?.background || '#eee';
    }
    else if (type === 'custom') {
      // TODO:
    }

    return { label, color, background };
  }, [item, theme.palette.conditionTypeChip, activeEntities, entities, customSettings]);


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <ChipContainer
        label     = {label}
        sx        = {{
          color,
          background,
          width  : stylesToSx(item?.styles)?.width,
          height : stylesToSx(item?.styles)?.height,
        }}
      />
    </ItemWrapper>
  )
});
