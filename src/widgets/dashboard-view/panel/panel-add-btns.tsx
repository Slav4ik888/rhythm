import { FC, memo } from 'react';
import { ViewItemType } from 'entities/dashboard-view';
import { AddBtn } from 'shared/ui/configurators-components';
import { OpenTemplatesBtn } from 'widgets/dashboard-templates';



interface Props {
  onClick: (type: ViewItemType | undefined) => void;
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
    <OpenTemplatesBtn />
  </>
));
