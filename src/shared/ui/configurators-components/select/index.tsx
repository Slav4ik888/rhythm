import { memo, useState } from 'react';
import { Chip, FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { f, SxCard, pxToRem } from 'shared/styles';



const useStyles = (sx?: SxCard) => ({
  root: {
    ...f(),
    position : 'relative',
    width    : '110px',
    ...sx?.root
  },
  chip: {
    position : 'absolute',
    top      : pxToRem(6),
    right    : 0,
    height   : '24px',
  },
  select: {
    visibility : 'hidden',
    opacity    : 0,
    height     : pxToRem(38),
  }
});


interface Props<T> {
  selectedValue : T
  array         : T[]
  sx?           : SxCard
  onSelect      : (value: T) => void
}


export const SelectValue = memo(<T extends string>({ sx: style, selectedValue, array, onSelect }: Props<T>) => {
  const sx = useStyles(style);
  const [openSelect, setOpenSelect] = useState(false);


  const handleChange = (e: SelectChangeEvent) => {
    onSelect(e.target.value as T);
    setOpenSelect(false);
  };

  const handleClickChip = () => setOpenSelect(true);
  const handleSelectClose = () => setOpenSelect(false);


  return (
    <FormControl sx={sx.root}>
      <Chip
        label   = {selectedValue}
        sx      = {sx.chip}
        onClick = {handleClickChip}
      />

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
            key   = {item}
            value = {item}
          >
            {item}
          </MenuItem>)
        }
      </Select>
    </FormControl>
  )
});
