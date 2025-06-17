import { FC, useCallback } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { RoutePath } from 'app/providers/routes';
import { MDDivider } from 'shared/ui/mui-design-components';
import { MenuItem } from 'shared/ui/items/menu-item';
import { NavbarMenu } from 'shared/ui/navbar';



type Props = {
  open     : boolean
  anchorEl : HTMLElement | null
  onClose  : () => void
};


export const AddUserMenu: FC<Props> = ({ open, anchorEl, onClose }) => {
  const a = 1;

  return (
    <NavbarMenu open={open} anchorEl={anchorEl} onClose={onClose}>


      <MDDivider />


    </NavbarMenu>
  )
};
