import { FC, memo, useMemo } from 'react';
import { ViewItem, ChipContainer, stylesToSx, useDashboardView, getKod } from 'entities/dashboard-view';
import { CONDITION_TYPE, DashboardConditionType, getConditionKod, getConditionType } from 'entities/condition-type';
import { useDashboardData } from 'entities/dashboard-data';
import { useTheme } from 'app/providers/theme';
import { StatisticPeriodType } from 'entities/statistic-type';
import { useCompany } from 'entities/company';



interface Props {
  item: ViewItem
}

/** Item chip */
export const ItemChip: FC<Props> = memo(({ item }) => {
  const theme = useTheme();
  const { paramsCustomSettings } = useCompany();
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
        ? getConditionType(activeEntities[conditionKode]?.data)
        : DashboardConditionType.NULL;

      label      = CONDITION_TYPE[condition].label;
      color      = theme.palette.conditionTypeChip[condition]?.color;
      background = theme.palette.conditionTypeChip[condition]?.background;
    }
    else if (type === 'period') {
      const period = kod ? activeEntities[kod]?.periodType : '' as StatisticPeriodType;
      label      = paramsCustomSettings?.periodType?.[period]?.title      || period;
      color      = paramsCustomSettings?.periodType?.[period]?.color      || '#000'; // theme.palette.statisticPeriodTypeChip[period]?.color;
      background = paramsCustomSettings?.periodType?.[period]?.background || '#eee'; // theme.palette.statisticPeriodTypeChip[period]?.background;
    }
    else if (type === 'company') {
      const company = kod ? activeEntities[kod]?.companyType : '' as string;
      label      = company;
      color      = paramsCustomSettings?.companyType?.[company]?.color      || '#000';
      background = paramsCustomSettings?.companyType?.[company]?.background || '#eee';
    }
    else if (type === 'product') {
      const product = kod ? activeEntities[kod]?.productType : '' as string;
      label      = product;
      color      = paramsCustomSettings?.productType?.[product]?.color      || '#000';
      background = paramsCustomSettings?.productType?.[product]?.background || '#eee';
    }
    else if (type === 'custom') {
      // TODO:
    }

    return { label, color, background };
  }, [item, theme.palette.conditionTypeChip, activeEntities, entities, paramsCustomSettings]);


  return (
    <ChipContainer
      label     = {label}
      sx        = {{
        color,
        background,
        width  : stylesToSx(item?.styles)?.width,
        height : stylesToSx(item?.styles)?.height,
      }}
    />
  )
});
