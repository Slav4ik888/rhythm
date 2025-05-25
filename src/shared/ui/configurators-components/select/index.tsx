import { memo, FC, useState, useCallback } from 'react';
import { Chip, FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { f, SxCard, pxToRem } from 'shared/styles';
import { isStr } from 'shared/lib/validators';



const useStyles = (sx?: SxCard, disabled?: boolean) => ({
  root: {
    ...f(),
    position : 'relative',
    minWidth : pxToRem(80),
    height   : pxToRem(24),
    ...sx?.root
  },
  chip: {
    position : 'absolute',
    top      : 0,
    right    : 0,
    height   : pxToRem(24),
    color    : disabled ? 'rgba(0,0,0,0.38)' : 'inherit',
  },
  select: {
    visibility : 'hidden',
    opacity    : 0,
    height     : pxToRem(38),
  }
});


interface Props<T> {
  selectedValue : T
  array         : T[] | any[] // any if component present
  component?    : FC<any> // Если нужен не стандартный компонент вместо item
  disabled?     : boolean
  sx?           : SxCard
  onSelect      : (value: T) => void
}


export const SelectValue = memo(<T extends string>({ sx: style, selectedValue, disabled, array, component: ComponentItem, onSelect }: Props<T>) => {
  const sx = useStyles(style, disabled);
  const [openSelect, setOpenSelect] = useState(false);

  const handleChange = useCallback((e: SelectChangeEvent) => {
    onSelect(e.target.value as T);
    setOpenSelect(false);
  }, [onSelect, setOpenSelect]);

  const handleClickChip = useCallback(() => ! disabled && setOpenSelect(true), [disabled, setOpenSelect]);
  const handleSelectClose = useCallback(() => setOpenSelect(false), [setOpenSelect]);


  return (
    <FormControl sx={sx.root}>
      <Chip
        label   = {selectedValue}
        sx      = {sx.chip}
        onClick = {handleClickChip}
      />

      {
        openSelect && 
          <Select
            variant      = 'standard'
            open         = {openSelect}
            defaultValue = ''
            sx           = {sx.select}
            onClose      = {handleSelectClose}
            onChange     = {handleChange}
          >
            {
              array.map((item) => <MenuItem
                key   = {isStr(item) ? item : item?.value}
                value = {isStr(item) ? item : item?.value}
              >
                {
                  ComponentItem
                    ? <ComponentItem item={item} />
                    : item
                }
              </MenuItem>)
            }
          </Select>
      }
    </FormControl>
  )
});
