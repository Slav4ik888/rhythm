import { ViewItem } from 'entities/dashboard-view';
import { FC, memo } from 'react';
import { RowWrapperTitle } from 'shared/ui/configurators-components';
import { FlagByScheme } from '../..';



interface Props {
  selectedItem : ViewItem | undefined
  scheme       : string // начиная с 1го уровня
  title        : string
  toolTitle    : string
  sx?          : any
}

export const RowFlagByScheme: FC<Props> = memo(({ selectedItem, scheme, title, toolTitle, sx }) => {
  return (
    <RowWrapperTitle title={title} toolTitle={toolTitle} sx={sx}>
      <FlagByScheme
        scheme       = {scheme}
        title        = {title}
        toolTitle    = {toolTitle}
        selectedItem = {selectedItem}
      />
    </RowWrapperTitle>
  )
});
