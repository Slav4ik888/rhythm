import { FC, memo, useState } from 'react';
import { pxToRem } from 'app/providers/theme-old';
import { actionsDashboard, arrayDashboardPeriodType, DashboardPeriodType, DASHBOARD_PERIOD_TEXT } from 'entities/dashboard';
import { FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from 'shared/lib/hooks';
import { PeriodTypeChip } from './chip';
import { useSelector } from 'react-redux';
import { selectCompanyId } from 'entities/companies';




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
  }
});



export const PeriodType: FC = memo(() => {
  const sx = useStyles();
  const dispatch = useAppDispatch();
  const companyId = useSelector(selectCompanyId);
  const [openSelect, setOpenSelect] = useState(false);


  const handleChangePeriod = (e: SelectChangeEvent) => {
    dispatch(actionsDashboard.setSelectedPeriod({ period: { type: e.target.value as DashboardPeriodType }, companyId }));
    setOpenSelect(false);
  };

  const handleClickChip = () => setOpenSelect(true);
  const handleSelectClose = () => setOpenSelect(false);


  return (
    <FormControl sx={sx.root}>
      <PeriodTypeChip onClick={handleClickChip} />

      <Select
        variant      = 'standard'
        open         = {openSelect}
        defaultValue = ""
        sx           = {sx.select}
        onClose      = {handleSelectClose}
        onChange     = {handleChangePeriod}
      >
        {
          arrayDashboardPeriodType.map((item) => <MenuItem
            key   = {item}
            value = {item}
          >
            {DASHBOARD_PERIOD_TEXT[item]}
          </MenuItem>)
        }
      </Select>
    </FormControl>
  )
});
