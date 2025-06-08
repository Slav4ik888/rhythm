import { FC, memo, useState, useRef, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import { f, pxToRem, SxCard } from 'shared/styles';
import { useClickOutside } from '../../hooks';
import { HexColorInput, RgbaColorPicker, RgbaColor  } from 'react-colorful';
import { CustomTheme, useTheme } from 'app/providers/theme';
import s from './index.module.scss';
import { MDButton } from 'shared/ui/mui-design-components';
import { hexToRgba, isValidRGBA, rgba, rgbaToHexWithAlpha } from '../utils';
import { Tooltip } from 'shared/ui/tooltip';
import PasteIcon from '@mui/icons-material/ContentPaste';
import CopyIcon from '@mui/icons-material/ContentCopy';
import TransparentIcon from '@mui/icons-material/BlurOn';
import { copyToClipboard, getClipboardText } from '../../clipboard';
import { isStr } from '../../validators';
import { __devLog } from '../../tests/__dev-log';

__devLog('MODULE STYLE: ', s);



const useStyles = (theme: CustomTheme, sx: SxCard | undefined, backgroundColor: RgbaColor | undefined) => ({
    root: {
      position: 'relative',
      ...sx?.root,
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
      bottom       : sx?.popover?.bottom ? sx?.popover?.bottom : 'calc(100% + 8px)',
      right        : 0,
      ...f('c'),
      gap          : 1,
      p            : 0.5,
      pb           : 1,
      borderRadius : '9px',
      boxShadow    : '0 6px 12px rgba(0, 0, 0, 0.15)',
      background   : theme.palette.background.paper,
      zIndex       : 1000,
      ...sx?.popover,
    },
    control: {
      ...f('-c-sb'),
    },
    transparent: {
      root: {
        fontSize : pxToRem(10),
        // width    : '60px',
      }
    },
    icon: {
      color    : theme.palette.dark.main,
      fontSize : '20px',
    },
  });


interface Props {
  color    : RgbaColor | undefined
  sx?      : SxCard
  onChange : (color: RgbaColor) => void
}


export const PopoverColorsPicker: FC<Props> = memo(({ sx: style, color, onChange }) => {
  const sx = useStyles(useTheme(), style, color);
  const popoverRef = useRef();
  const [isOpen, toggle] = useState(false);

  const handleOpen = useCallback(() => toggle(true), [toggle]);
  const handleClose = useCallback(() => toggle(false), [toggle]);

  useClickOutside(popoverRef, handleClose);

  const handleChange = useCallback((newColor: RgbaColor) => onChange(newColor), [onChange]);
  const handleChangeHex = useCallback((hex: string) => onChange(hexToRgba(hex)), [onChange]);

  const handleCopyColor = useCallback(() => copyToClipboard(rgbaToHexWithAlpha(rgba(color))), [color]);
  const handlePasteColor = useCallback(async () => {
    const copied = await getClipboardText();
    if (isValidRGBA(copied)) handleChangeHex(copied);
  }, [handleChangeHex]);

  const handleTransparent = useCallback(() => onChange({ r: 255, g: 255, b: 255, a: 0 }), [onChange]);

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
              alpha
              prefixed
              color    = {rgbaToHexWithAlpha(rgba(color))}
              style    = {{ width: 100, marginRight: 4 }}
              onChange = {handleChangeHex}
            />
            <Tooltip title='Скопировать цвет'>
              <IconButton  size='small' onClick={handleCopyColor}>
                <CopyIcon sx={sx.icon} />
              </IconButton>
            </Tooltip>

            <Tooltip title='Вставить скопированный цвет'>
              <IconButton  size='small' onClick={handlePasteColor}>
                <PasteIcon sx={sx.icon} />
              </IconButton>
            </Tooltip>

            <Tooltip title='Прозрачность 100%'>
              <IconButton  size='small' onClick={handleTransparent}>
                <TransparentIcon sx={sx.icon} />
              </IconButton>
            </Tooltip>

            {/* <Tooltip title='Прозрачность 100%'>
              <MDButton
                variant = 'outlined'
                color   = 'dark'
                size    = 'small'
                sx      = {sx.transparent}
                onClick = {handleTransparent}
              >
                <TransparentIcon sx={sx.icon} />
              </MDButton>
            </Tooltip> */}
          </Box>
        </Box>
      )}
    </Box>
  );
});
