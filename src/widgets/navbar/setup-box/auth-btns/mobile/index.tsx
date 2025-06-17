import { FC, memo, MouseEvent, useState } from 'react';
import { MobileAuthBtn } from './menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavbarIcon } from 'shared/ui/navbar';



export const MobileAuthBtns: FC = memo(() => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event?.currentTarget);
  const handleClose = () => setAnchorEl(null)


  return (
    <>
      <NavbarIcon
        toolTitle = ''
        icon      = {AccountCircle}
        onClick   = {handleClick}
      />

      <MobileAuthBtn
        open     = {open}
        anchorEl = {anchorEl}
        onClose  = {handleClose}
      />
    </>
  );
});
