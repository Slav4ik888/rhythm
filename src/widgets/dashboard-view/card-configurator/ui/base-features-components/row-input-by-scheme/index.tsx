import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { InputType } from 'shared/ui/containers';
import { InputByScheme } from '..';



interface Props {
  scheme    : string // начиная с 1го уровня
  type      : InputType
  title     : string
  toolTitle : string
  width?    : string
  clear?    : any
  sx?       : any
}

export const RowInputByScheme: FC<Props> = memo(({ scheme, type, title, toolTitle, width, clear, sx }) => {
  return (
    <RowWrapper sx={sx}>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      
      <InputByScheme
        type   = {type}
        scheme = {scheme}
        width  = {width}
        clear  = {clear}
      />
    </RowWrapper>
  )
});
