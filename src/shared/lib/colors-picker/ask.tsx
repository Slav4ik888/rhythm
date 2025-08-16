import { FC, memo, useEffect, useRef, useState, useCallback } from 'react';
import { useDebouncyEffect } from 'use-debouncy';
import { RgbaString } from 'entities/dashboard-view';
import { isNotUndefined } from '../validators';
import { __devLog } from '../tests/__dev-log';
import Box from '@mui/material/Box';
import { f, pxToRem, SxCard } from 'shared/styles';
import { HexColorInput, RgbaColorPicker, RgbaColor  } from 'react-colorful';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { hexToRgba, isValidRGBA, rgba, rgbaStringToRgba, rgbaToHexWithAlpha } from './utils';
import PasteIcon from '@mui/icons-material/ContentPaste';
import CopyIcon from '@mui/icons-material/ContentCopy';
import TransparentIcon from '@mui/icons-material/BlurOn';
import { copyToClipboard, getClipboardText } from '../clipboard';
import { IconButton } from 'shared/ui/mui-components';
import { useClickOutside } from '../hooks';



const useStyles = (theme: CustomTheme, sx: SxCard | undefined, backgroundColor: RgbaColor | undefined) => ({
    root: {
      position: 'relative',
      ...sx?.root,
    },

    swatch: {
      width           : '50px',
      height          : '28px',
      borderRadius    : '8px',
      border          : `2px solid ${theme.palette.text.light}`,
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


const PopoverColorsPicker: FC<Props> = memo(({ sx: style, color, onChange }) => {
  const sx = useStyles(useTheme(), style, color);
  const popoverRef = useRef();
  const [isOpen, toggle] = useState(false);

  const handleOpen = useCallback(() => toggle(true), [toggle]);
  const handleClose = useCallback(() => toggle(false), [toggle]);

  useClickOutside(popoverRef, handleClose);

  const handleChange = useCallback((newColor: RgbaColor) => onChange(newColor), [onChange]);
  const handleChangeHex = useCallback((hex: string) => onChange(hexToRgba(hex)), [onChange]);


  return (
    <Box sx={sx.root}>
      <Box sx={sx.swatch} onClick={handleOpen} />

      {isOpen && (
        <Box sx={sx.popover} ref={popoverRef}>
          <RgbaColorPicker
            color     = {color}
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
          </Box>
        </Box>
      )}
    </Box>
  );
});



interface PropsColorPicker {
  defaultColor : RgbaString | undefined
  sx?          : SxCard
  onChange     : (color: RgbaString) => void
}


export const ColorPicker: FC<PropsColorPicker> = memo(({ sx, defaultColor, onChange }) => {
  const [color, setColor] = useState<RgbaColor | undefined>();
  // Для того, чтобы при переключении между элементами, в выбранны не подтягивался цвет предыдущего
  // для этого храним предыдущее значение defaultColor
  const prevDefaultColorRef = useRef(defaultColor);
  const [isChanges, setIsChanges] = useState(false); // Было ли хотя бы 1 изменение


  useEffect(() => {
    // Условие для того, чтобы попробовать устранить баг, когда при первоначальной монтировке выбранного элемента
    // defaultColor приходит undefined и из rgbaStringToRgba подставляется rgba(undefined, undefined, undefined...)
    if (defaultColor) setColor(rgbaStringToRgba(defaultColor));
  }, [defaultColor]);


  useDebouncyEffect(() => {
    // Не обновлять значение, если в компоненте оно ещё не существует (например, его ещё ни сразу не устанавливали)
    if (defaultColor === undefined && color === undefined) return;

    // Не обновлять значение, при первоначальной установке color
    if (rgba(color) === defaultColor && ! isChanges) return; // Вроде устранил с помощью isChanges - баг в том, что если изменили defaultColor, то вернуть его же система не даст

    // Если defaultColor изменился, обновляем color
    if (prevDefaultColorRef.current !== defaultColor) {
      prevDefaultColorRef.current = defaultColor; // Обновляем предыдущее значение
    }
    else if (rgba(color) !== defaultColor) {
        if (isNotUndefined(color?.r)) {
          setIsChanges(true);
          onChange(rgba(color));
        }
        else __devLog('ПОПЫТКА СОХРАНИТЬ UNDEFINED');
      }
  },
    20,
    [isChanges, prevDefaultColorRef.current, defaultColor, color, onChange]
  );


  return <PopoverColorsPicker sx={sx} color={color} onChange={setColor} />;
});
