import { FC, memo, ReactNode } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { SxCard } from 'shared/styles';



interface Props {
  title     : string
  toolTitle : string
  children  : ReactNode
  sx?       : SxCard
}

export const RowWrapperTitle: FC<Props> = memo(({ children, title, toolTitle, sx }) => {
  return (
    <RowWrapper sx={sx}>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      {children}
    </RowWrapper>
  )
});
