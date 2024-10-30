import { FC, memo, MouseEvent, useState } from 'react';
import { MobileAuthBtn } from './menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';



export const MobileAuthBtns: FC = memo(() => {
  const
    [anchorEl, setAnchorEl] = useState<Element | null>(null),
    open = Boolean(anchorEl),

    handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event?.currentTarget),
    handleClose = () => setAnchorEl(null)


  return (
    <>
      <IconButton
        id            = 'basic-button'
        aria-controls = 'basic-menu'
        aria-haspopup = 'true'
        aria-expanded = {open ? 'true' : undefined}
        onClick       = {(e) => handleClick(e)}
      >
        <AccountCircle />
      </IconButton>

      <MobileAuthBtn
        open     = {open}
        anchorEl = {anchorEl}
        onClose  = {handleClose}
      />
    </>
  );
});
