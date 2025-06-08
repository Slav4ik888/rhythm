import { FC, memo } from 'react';
import { ConfiguratorTitle } from 'shared/ui/configurators-components';
import { MDDivider } from 'shared/ui/mui-design-components';
import { DeleteItemContainer as DeleteItem } from 'features/dashboard-view';



export const DangerZone: FC = memo(() => (
    <>
      <MDDivider mt={8} mb={2} />

      <ConfiguratorTitle title='Опасная зона' type='title1' />
      <DeleteItem />
    </>
  ));
