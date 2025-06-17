import { FC, ReactNode, memo } from 'react';
import Menu from '@mui/material/Menu';
import { CustomTheme } from 'app/providers/theme';



type Props = {
  open     : boolean
  anchorEl : HTMLElement | null
  children : ReactNode
  onClose  : () => void
};


/** Меню для Navbar  */
export const NavbarMenu: FC<Props> = memo(({ open, anchorEl, children, onClose }) => (
  <Menu
    keepMounted
    open            = {open}
    anchorEl        = {anchorEl}
    anchorOrigin    = {{ vertical: 'top', horizontal: 'right' }}
    transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
    onClose         = {onClose}
    slotProps       = {{
      paper: {
        sx: {
          backgroundColor: (theme) => (theme as CustomTheme).palette.navbar.bg
        }
      }
    }}
  >
    {
      children
    }
  </Menu>
));
