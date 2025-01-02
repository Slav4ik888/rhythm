import { FC, memo } from 'react';
import { ItemStylesField } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { SelectFontWeight } from './select-font-weight';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** Set fontWeight */
export const FontWeightRow: FC<Props> = memo(({ onChange }) => {

  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='font-weight' toolTitle='font-weight' bold />

      <SelectFontWeight onChange={onChange} />
    </RowWrapper>
  )
});
