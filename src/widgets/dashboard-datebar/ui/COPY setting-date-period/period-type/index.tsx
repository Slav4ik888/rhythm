import { FC, memo, useState } from 'react';
import { pxToRem } from 'app/providers/theme';
import { arrayDashboardPeriodType, DashboardPeriodType } from 'entities/dashboard';
import { FormControl, MenuItem, Chip } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CheckIsChanged } from '..';




const useStyles = () => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: 120,
    mr: 1
  },
  select: {
    visibility: 'hidden',
    opacity: 0,
    height: pxToRem(38)
  },
  chip: {
    position: 'absolute',
    top: pxToRem(3),
    right: pxToRem(10),
    zIndex: 10
  }
});



interface Props {
  selectedPeriodType      : DashboardPeriodType
  onSetSelectedPeriodType : (periodType: DashboardPeriodType) => void
  onCheckIsChanged        : ({ start, end, period }: CheckIsChanged) => void
}


export const PeriodType: FC<Props> = memo(({ selectedPeriodType, onCheckIsChanged, onSetSelectedPeriodType }) => {
  const sx = useStyles();
  const [openSelect, setOpenSelect] = useState(false);


  const handleChangePeriod = (e: SelectChangeEvent) => {
    onSetSelectedPeriodType(e.target.value as DashboardPeriodType);
    setOpenSelect(false);
    onCheckIsChanged({ period: e.target.value as DashboardPeriodType });
  };

  const handleClickChip = () => setOpenSelect(true);
  const handleSelectClose = () => setOpenSelect(false);


  return (
    <FormControl sx={sx.root}>
      <Chip
        label   = {selectedPeriodType}
        sx      = {sx.chip}
        onClick = {handleClickChip}
      />

      <Select
        variant  = 'standard'
        open     = {openSelect}
        value    = {selectedPeriodType}
        sx       = {sx.select}
        onClose  = {handleSelectClose}
        onChange = {handleChangePeriod}
      >
        {
          arrayDashboardPeriodType.map((item) => <MenuItem
            key   = {item}
            value = {item as unknown as string}
          >
            {item as unknown as string}
          </MenuItem>)
        }
      </Select>
    </FormControl>
  )
});
