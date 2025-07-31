import { FC, memo } from 'react';
import Menu from '@mui/icons-material/Menu';
import { MenuIconContainer } from 'shared/ui/menu-icon';
import { AnyLinksBox } from '../any';



export const MobileLinksBox: FC = memo(() => (
  <MenuIconContainer
    icon = {Menu}
    menu = {AnyLinksBox}
  />
));
