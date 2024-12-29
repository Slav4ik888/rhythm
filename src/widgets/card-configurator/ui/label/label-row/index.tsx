import { FC, memo, MouseEvent } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextfieldItem, RowWrapper } from 'shared/ui/configurators-components';
import { pxToRem } from 'app/providers/theme';



/**  */
export const LabelRow: FC = memo(() => {
  const { selectedItem: { id, label }, updateCardItem } = useDashboardView();

  const handleChange = (e: MouseEvent, value: number | string) => {
    updateCardItem({ id, label: value as string });
  };


  return (
    <RowWrapper>
      <ConfiguratorTextfieldItem
        type         = 'text'
        defaultValue = {label}
        toolTitle    = 'Заголовок'
        width        = '100%'
        sx           = {{ field: { height: pxToRem(40)}}}
        onSubmit     = {handleChange}
      />
    </RowWrapper>
  )
});
