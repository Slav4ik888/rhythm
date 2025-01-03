import { FC, memo } from 'react';
import { ItemStylesField } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { SelectFontStyle } from './select-font-style';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/** Set fontStyle */
export const FontStyleRow: FC<Props> = memo(({ onChange }) => {

  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='font-style' toolTitle='font-style' bold />
      <SelectFontStyle onChange={onChange} />
    </RowWrapper>
  )
});
