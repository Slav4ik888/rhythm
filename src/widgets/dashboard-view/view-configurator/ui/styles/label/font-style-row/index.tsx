import { FC, memo } from 'react';
import { ViewItem, ViewItemStylesField } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { SelectFontStyle } from './select-font-style';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** Set fontStyle */
export const FontStyleRow: FC<Props> = memo(({ selectedItem, onChange }) => {

  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='font-style' toolTitle='font-style' bold />
      <SelectFontStyle selectedItem={selectedItem} onChange={onChange} />
    </RowWrapper>
  )
});
