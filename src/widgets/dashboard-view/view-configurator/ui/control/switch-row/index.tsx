import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { SwitchToParentViewItem, SwitchToIsGlobalKod } from 'features/dashboard-view';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { f, pxToRem } from 'shared/styles';




export const SwitchRow: FC = memo(() => {
  return (
    <SubHeader title='Переключение'>
      <RowWrapper sx={{ root: { ...f('-c-fe'), gap: pxToRem(8) } }}>
        <SwitchToParentViewItem />
        <SwitchToIsGlobalKod />
      </RowWrapper>
    </SubHeader>
  )
});
