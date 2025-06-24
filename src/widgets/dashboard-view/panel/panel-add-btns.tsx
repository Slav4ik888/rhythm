import { FC, memo } from 'react';
import { ViewItemType } from 'entities/dashboard-view/model/types';
import { AddBtn } from 'shared/ui/configurators-components';



interface Props {
  onClick: (type: ViewItemType) => void;
}

/** For Panel */
export const PanelAddViewItemBtns: FC<Props> = memo(({ onClick }) => (
  <>
    <AddBtn
      type    = 'box'
      onClick = {onClick}
    />
    <AddBtn
      type    = 'text'
      onClick = {onClick}
    />
  </>
));
