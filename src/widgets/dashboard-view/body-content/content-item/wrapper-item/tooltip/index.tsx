import { FC, memo, ReactElement, useMemo, Fragment } from 'react';
import { ViewItem, useDashboardView, getKod, ChipContainer as Chip } from 'entities/dashboard-view';
import { TooltipHTML } from 'shared/ui/tooltip';
import { useDashboardData } from 'entities/dashboard-data';
import { useCompany } from 'entities/company';
import { pxToRem } from 'shared/styles';
import { Box } from '@mui/material';



interface Props {
  item     : ViewItem
  children : ReactElement
}

export const ItemWrapperTooltip: FC<Props> = memo(({ item, children }) => {
  const { customSettings } = useCompany();
  const { startEntities } = useDashboardData();
  const { entities: entitiesView } = useDashboardView();
  const { kods } = useDashboardData();
  const kod = useMemo(() => getKod(entitiesView, item), [item, entitiesView]);


  const toolTitle = useMemo(() => {
    if (item.type === 'box' || item.type === 'text') return ''; // Тк в 'box' это только для настройки isGlobalKod
    
    const result = kods.find(it => it?.value === kod);

    return result
      ? result.value + ' ' + (result.title ? ' - ' + result.title : '')
      : kod || '';
  } , [item, kods, entitiesView]);


  const companyProductPeriod = useMemo(() => {
    const companyType = startEntities[kod]?.companyType;
    const productType = startEntities[kod]?.productType;
    const periodType  = startEntities[kod]?.periodType;
    
    const companyText = ! companyType ? '' : <span>
      <Chip
        label = {companyType}
        sx    = {{
          color      : customSettings?.companyType?.[companyType]?.color      || 'black',
          background : customSettings?.companyType?.[companyType]?.background || 'rgb(111, 111, 111)',
          width  : pxToRem(90),
          height : pxToRem(16),
        }}
      />&nbsp;
    </span>;

    const productText = !productType
      ? ''
      : <Chip
          label = {productType}
          sx    = {{
            color      : customSettings?.productType?.[productType]?.color      || 'black',
            background : customSettings?.productType?.[productType]?.background || 'rgb(111, 111, 111)',
            width      : pxToRem(90),
            height     : pxToRem(16),
            mr         : 1
          }}
        />;
    
    const periodText = ! periodType ? '' : <span>
      <Chip
        label = {periodType}
        sx    = {{
          color      : customSettings?.periodType?.[periodType]?.color      || 'black',
          background : customSettings?.periodType?.[periodType]?.background || 'rgb(111, 111, 111)',
          width  : pxToRem(70),
          height : pxToRem(16),
        }}
      />&nbsp;
    </span>;
    
    return <Fragment>
      {companyText}{productText}{periodText}
    </Fragment>
  }, [item]);
  

  return (
    <TooltipHTML
      title={<Fragment>
        {companyProductPeriod && <Box>{companyProductPeriod}</Box>}
        {toolTitle}
      </Fragment>}
    >
      {children}
    </TooltipHTML>
  )
});
