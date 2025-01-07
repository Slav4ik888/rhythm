import { FC, memo } from 'react';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ChangeStyleItem, RowWrapper } from 'shared/ui/configurators-components';
import { pxToRem } from 'shared/styles';



/**  */
export const LabelRow: FC = memo(() => {
  const { selectedItem: { id, label }, updateCardItem } = useDashboardView();

  const handleChange = (field: ItemStylesField, value: number | string) => {
    updateCardItem({ id, label: value as string });
  };


  return (
    <RowWrapper>
      <ChangeStyleItem
        type       = 'text'
        toolTitle  = 'Заголовок'
        value      = {label as string}
        width      = '100%'
        sx         = {{ field: { height: pxToRem(40)}}}
        onSubmit   = {handleChange}
      />
    </RowWrapper>
  )
});
