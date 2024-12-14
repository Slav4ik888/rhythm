import { FC, memo, useState } from 'react';
import { pxToRem } from 'app/providers/theme';
import { Chip, FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const useStyles = () => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: 120,
    mr: 1
  },
  chip: {
    position : 'absolute',
    top      : pxToRem(3),
    right    : pxToRem(10),
    // zIndex   : 10,
  },
  select: {
    visibility: 'hidden',
    opacity: 0,
    height: pxToRem(38)
  }
});


interface Props {
  selectedValue : string
  array         : string[]
  onSelect      : (value: string) => void
}


export const SelectValue: FC<Props> = memo(({ selectedValue, array, onSelect }) => {
  const sx = useStyles();
  const [openSelect, setOpenSelect] = useState(false);


  const handleChange = (e: SelectChangeEvent) => {
    onSelect(e.target.value as string);
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