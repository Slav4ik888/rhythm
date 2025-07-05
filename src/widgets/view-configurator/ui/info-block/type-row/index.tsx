import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';



interface Props {
  type: string
}

export const TypeRow: FC<Props> = memo(({ type }) => (
  <RowWrapper>
    <ConfiguratorTextTitle
      bold
      title     = 'Type'
      toolTitle = 'Item type'
    />
    {type}
  </RowWrapper>
));
