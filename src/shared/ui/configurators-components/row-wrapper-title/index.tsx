import { FC, memo, ReactNode } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from '../../configurators-components';
import { SxCard } from '../../../styles';



interface Props {
  title     : string
  toolTitle : string
  children  : ReactNode
  sx?       : SxCard
}

export const RowWrapperTitle: FC<Props> = memo(({ children, title, toolTitle, sx }) => (
    <RowWrapper sx={sx}>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      {children}
    </RowWrapper>
  ));
