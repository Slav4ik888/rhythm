import { FC, memo, useState, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { useClickOutside } from 'shared/lib/hooks';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { CustomTheme, useTheme } from 'app/providers/theme';
import s from './index.module.scss';
console.log('s: ', s);


const useStyles = (theme: CustomTheme, backgroundColor: string) => ({
  root: {
    position: 'relative',
  },

  swatch: {
    width        : '50px',
    height       : '28px',
    borderRadius : '8px',
    border       : '3px solid #fff',
    boxShadow    : '0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
    cursor       : 'pointer',
    backgroundColor
  },

  popover: {
    position     : 'absolute',
    bottom       : 'calc(100% + 8px)',
    right        : 0,
    ...f('c'),
    gap          : 1,
    p            : 0.5,
    pb           : 1,   
    borderRadius : '9px',
    boxShadow    : '0 6px 12px rgba(0, 0, 0, 0.15)',
    background   : theme.palette.background.paper,
    zIndex       : 1000,
  }

});


interface Props {
  color    : string
  onChange : (color: string) => void
}


export const PopoverColorsPicker: FC<Props> = memo(({ color, onChange }) => {
  const sx = useStyles(useTheme(), color);
  const popoverRef = useRef();
  const [isOpen, toggle] = useState(false);

  const handleOpen = useCallback(() => toggle(true), []);
  const handleClose = useCallback(() => toggle(false), []);
  
  useClickOutside(popoverRef, handleClose);


  return (
    <Box sx={sx.root}>
      <Box sx={sx.swatch} onClick={handleOpen} />

      {isOpen && (
        <Box sx={sx.popover} ref={popoverRef}>
          <HexColorPicker color={color} className={s?.resposive } onChange={onChange} />
          <HexColorInput alpha prefixed color={color} onChange={onChange} />
        </Box>
      )}
    </Box>
  );
});
