import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';



interface Props {
  selectedId: string
}

export const IdTitle: FC<Props> = memo(({ selectedId }) => {

  return (
    <RowWrapper sx={{ mt: 3 }}>
      <ConfiguratorTextTitle bold title='Id' toolTitle='Item id' />
      {selectedId}
    </RowWrapper>
  )
});
