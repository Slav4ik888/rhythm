import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { LabelRow } from './label-row';
import { SetColor } from './set-color';
import { FontSizeRow } from './font-size-row';
import { FontWeightRow } from './font-weight-row';
import { FontStyleRow } from './font-style-row';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** Card text label */
export const CardLabel: FC<Props> = memo(({ onChange }) => {
  const { selectedItem: { type } } = useDashboardView();

  if (type !== 'text') return null

  return (
    <SubHeader title='Текст'>
      <LabelRow />
      <FontSizeRow   onChange={onChange} />
      <FontStyleRow  onChange={onChange} />
      <FontWeightRow onChange={onChange} />
      
      {/* font-family */}
      <SetColor onChange={onChange} />
    </SubHeader>
  )
});
