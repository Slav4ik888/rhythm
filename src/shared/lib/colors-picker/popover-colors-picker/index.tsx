import { FC, memo, useState, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import { f, pxToRem } from 'shared/styles';
import { useClickOutside } from 'shared/lib/hooks';
import { HexColorInput, RgbaColorPicker, RgbaColor  } from 'react-colorful';
import { CustomTheme, useTheme } from 'app/providers/theme';
import s from './index.module.scss';
import { MDButton } from 'shared/ui/mui-design-components';
import { hexToRgba, rgba } from '../utils';
console.log('MODULE STYLE: ', s);



const useStyles = (theme: CustomTheme, backgroundColor: RgbaColor | undefined) => ({
  root: {
    position: 'relative',
  },

  swatch: {
    width           : '50px',
    height          : '28px',
    borderRadius    : '8px',
    border          : '3px solid #fff',
    boxShadow       : '0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)',
    cursor          : 'pointer',
    backgroundColor : rgba(backgroundColor),
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
  },
  control: {
    ...f('-c-sb'),
  },
  transparent: {
    root: {
      fontSize : pxToRem(10),
      // width    : '60px',
    }
  }
});


interface Props {
  color    : RgbaColor | undefined
  onChange : (color: RgbaColor) => void
}


export const PopoverColorsPicker: FC<Props> = memo(({ color, onChange }) => {
  const sx = useStyles(useTheme(), color);
  const popoverRef = useRef();
  const [isOpen, toggle] = useState(false);

  const handleOpen = useCallback(() => toggle(true), []);
  const handleClose = useCallback(() => toggle(false), []);
  
  useClickOutside(popoverRef, handleClose);

  const handleChange      = (newColor: RgbaColor) => onChange(newColor);
  const handleChangeHex   = (hex: string) => onChange(hexToRgba(hex));
  const handleTransparent = () => onChange({ r: 255, g: 255, b: 255, a: 0 });

  return (
    <Box sx={sx.root}>
      <Box sx={sx.swatch} onClick={handleOpen} />

      {isOpen && (
        <Box sx={sx.popover} ref={popoverRef}>
          <RgbaColorPicker
            color     = {color}
            className = {s?.resposive}
            onChange  = {handleChange}
          />
          <Box sx={sx.control}>
            <HexColorInput
              // alpha
              prefixed
              color    = {rgba(color)}
              style    = {{ width: 100 }}
              onChange = {handleChangeHex}
            />
            <MDButton
              variant = 'outlined'
              color   = 'dark'
              size    = 'small'
              sx      = {sx.transparent}
              onClick = {handleTransparent}
            >
              Transparent
            </MDButton>
          </Box>
        </Box>
      )}
    </Box>
  );
});
