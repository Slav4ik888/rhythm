import { FC, memo, useCallback, MouseEvent, useMemo } from 'react';
import { Input, InputType } from 'shared/ui/containers';
import { PartialCardItem, useDashboardView } from 'entities/dashboard-view';
import { getValueByScheme, setValueByScheme } from 'shared/helpers/objects';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from 'app/providers/theme';
import { Box } from '@mui/material';
import { SxInputByScheme, useStyles } from './styles';



interface Props {
  scheme      : string
  type        : InputType
  width?      : string
  helperText? : string
  toolTitle?  : string
  sx?         : SxInputByScheme
  transform?: (v: string | number) => string | number // Если полученное начальное значение нужно как-либо преобразовать. Например, 'boxShadow': 'rgba(184, 184, 184, 1)'
  clear?      : string | number // Если нужно, чтобы при очистке значения, была не пустая строка '', а что-то другое
  onClear?    : () => void // Если нужно, чтобы для очистки значения, была другая функция
  onBlur?     : (e: MouseEvent, v: string | number) => void // Если нужна не стандартная обработка
  onChange?   : (e: MouseEvent, v: string | number) => void // Если нужна не стандартная обработка
  onSubmit?   : (e: MouseEvent, v: string | number) => void // Если нужна не стандартная обработка
}


/** Input update CardItem */
export const InputByScheme: FC<Props> = memo(({
  scheme, type, width, sx: style, helperText, toolTitle, clear,
  transform, onClear, onBlur, onChange, onSubmit
}) => {
  const sx = useStyles(useTheme(), style, width);
  const { selectedItem, updateCardItem } = useDashboardView();
  const value = useMemo(() => {
    const v = getValueByScheme(selectedItem, scheme);
    return transform ? transform(v) : v
  }, [selectedItem, scheme]);


  // Change - приходит тот тип, что указали в type
  const handleChange = useCallback((e: MouseEvent, v: string | number) => {
    if (onChange) return onChange(e, v);

    const result: PartialCardItem = {
      id: selectedItem.id
    };

    setValueByScheme(result, scheme, v);
    updateCardItem(result);
  }, [selectedItem]);

  // Blur
  const handleBlur = useCallback((e: MouseEvent, v: string | number) => {
    if (onBlur) return onBlur(e, v);
    handleChange(e, v);
  }, [selectedItem]);

  // Submit
  const handleSubmit = useCallback((e: MouseEvent, v: string | number) => {
    if (onSubmit) return onSubmit(e, v);
    handleChange(e, v);
  }, [selectedItem]);
  
  // Clear
  const handleClear = useCallback((e: MouseEvent) => {
    if (onClear) onClear()
    else handleChange(e, clear !== undefined ? clear : '');
  }, [onClear, handleChange]);


  return (
    <Box sx={sx.wrapper}>
      <Input
        type         = {type}
        defaultValue = {value}
        changesValue = {value}
        helperText   = {helperText}
        toolTitle    = {toolTitle}
        sx           = {sx.textfield}
        onBlur       = {handleBlur}
        onChange     = {handleChange}
        onSubmit     = {handleSubmit}
      />
      {
        value ? <ClearIcon sx={sx.clearBtn} onClick={handleClear} /> : ''
      }
    </Box>
  )
});
