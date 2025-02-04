import { FC, memo } from 'react';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { ViewItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { LabelRow } from './label-row';
import { SetColor } from './set-color';
import { FontSizeRow } from './font-size-row';
import { FontWeightRow } from './font-weight-row';
import { FontStyleRow } from './font-style-row';
import { LineHeightRow } from './line-height-row';



interface Props {
  onChange: (field: ViewItemStylesField, value: number | string) => void
}

/** Card text label */
export const CardLabel: FC<Props> = memo(({ onChange }) => {
  const { selectedItem: { type } } = useDashboardView();

  if (type !== 'text' && type !== 'digitIndicator') return null

  return (
    <SubHeader title='Текст'>
      {type === 'text' && <LabelRow />}
      <FontSizeRow />
      <FontStyleRow  onChange={onChange} />
      <FontWeightRow onChange={onChange} />
      <LineHeightRow />
      {/* font-family */}

      <SetColor onChange={onChange} />
    </SubHeader>
  )
});
