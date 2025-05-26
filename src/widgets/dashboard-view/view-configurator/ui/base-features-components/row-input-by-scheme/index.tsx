import { FC, memo, MouseEvent } from 'react';
import { ViewItem } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { InputType } from 'shared/ui/containers';
import { InputByScheme } from '..';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string // начиная с 1го уровня
  type?        : InputType
  title        : string
  toolTitle    : string
  width?       : string
  clear?       : any
  sx?          : any
  onChange?    : (e: MouseEvent, v: string | number) => void // Если нужна не стандартная обработка
}

export const RowInputByScheme: FC<Props> = memo(({ selectedItem, scheme, type, title, toolTitle, width, clear, sx, onChange }) => {
  return (
    <RowWrapper sx={sx}>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      
      <InputByScheme
        type         = {type}
        scheme       = {scheme}
        width        = {width}
        clear        = {clear}
        selectedItem = {selectedItem}
        onChange     = {onChange}
      />
    </RowWrapper>
  )
});
