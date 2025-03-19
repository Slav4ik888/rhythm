import { FC, memo, useCallback, MouseEvent, useMemo } from 'react';
import { Input, InputType } from 'shared/ui/containers';
import { PartialViewItem, useDashboardView } from 'entities/dashboard-view';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from 'app/providers/theme';
import { Box } from '@mui/material';
import { SxInputByScheme, useStyles } from './styles';



interface Props {
  scheme      : string
  type?       : InputType
  width?      : string
  helperText? : string
  toolTitle?  : string
  disabled?   : boolean
  sx?         : SxInputByScheme
  transform?  : (v: string | number) => string | number // Если полученное начальное значение нужно как-либо преобразовать. Например, 'boxShadow': 'rgba(184, 184, 184, 1)'
  clear?      : string | number // Если нужно, чтобы при очистке значения, была не пустая строка '', а что-то другое
  onClear?    : () => void      // Если нужно, чтобы для очистки значения, была другая функция
  onBlur?     : (e: MouseEvent, v: string | number) => void // Если нужна не стандартная обработка
  onChange?   : (e: MouseEvent, v: string | number) => void // Если нужна не стандартная обработка
  onSubmit?   : (e: MouseEvent, v: string | number) => void // Если нужна не стандартная обработка
}


/** Input update ViewItem */
export const InputByScheme: FC<Props> = memo(({ scheme, width, sx: style, helperText, toolTitle, clear, disabled,
  type = 'text',
  transform, onClear, onBlur, onChange, onSubmit
}) => {
  const sx = useStyles(useTheme(), style, width);
  const { selectedItem, updateViewItem } = useDashboardView();
  
  const value = useMemo(() => {
    const v = getValueByScheme(selectedItem, scheme);
    return transform ? transform(v) : v
  }, [selectedItem, scheme, transform]);


  const handleUpdate = useCallback((v: string | number) => {
    const result: PartialViewItem = {
      id: selectedItem.id
    };

    setValueByScheme(result, scheme, v);
    updateViewItem(result);
  }, [selectedItem, scheme, updateViewItem]);


  // Change - приходит тот тип, что указали в type
  const handleChange = useCallback((e: MouseEvent, v: string | number) => {
    if (onChange) onChange(e, v);
    else handleUpdate(v);
  }, [selectedItem, scheme, handleUpdate]);


  // Blur
  const handleBlur = useCallback((e: MouseEvent, v: string | number) => {
    if (onBlur) onBlur(e, v);
    else handleSubmit(e, v);
  }, [selectedItem, scheme, onBlur]);


  // Submit
  const handleSubmit = useCallback((e: MouseEvent, v: string | number) => {
    if (onSubmit) onSubmit(e, v);
    else handleUpdate(v);
  }, [selectedItem, scheme, handleUpdate, onSubmit]);
  
  
  // Clear
  const handleClear = useCallback((e: MouseEvent) => {
    if (onClear) onClear()
    else handleSubmit(e, clear !== undefined ? clear : '');
  }, [onClear, handleChange]);


  return (
    <Box sx={sx.wrapper}>
      <Input
        type         = {type}
        defaultValue = {value}
        changesValue = {value}
        helperText   = {helperText}
        toolTitle    = {toolTitle}
        disabled     = {disabled}
        sx           = {sx.textfield}
        onBlur       = {handleBlur}
        onChange     = {handleChange}
        onSubmit     = {handleSubmit}
      />
      {
        value
          ? <ClearIcon sx={sx.clearBtn} onClick={handleClear} />
          : ''
      }
    </Box>
  )
});
