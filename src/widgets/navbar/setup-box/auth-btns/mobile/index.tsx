import { FC, memo, MouseEvent, useState } from 'react';
import { MobileAuthBtn } from './menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { SxNavbarIcon } from '../../..';



interface Props {
  sx: SxNavbarIcon
}

export const MobileAuthBtns: FC<Props> = memo(({ sx }) => {
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
        sx            = {sx.button}
        onClick       = {(e) => handleClick(e)}
      >
        <AccountCircle sx={sx.icon} />
      </IconButton>

      <MobileAuthBtn
        open     = {open}
        anchorEl = {anchorEl}
        onClose  = {handleClose}
      />
    </>
  );
});
