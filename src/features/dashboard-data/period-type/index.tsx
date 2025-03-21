import { FC, memo, useState } from 'react';
import { pxToRem } from 'shared/styles';
import { arrayDashboardPeriodType, DashboardPeriodType, DASHBOARD_PERIOD_TEXT, useDashboardData } from 'entities/dashboard-data';
import { FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { PeriodTypeChip } from './chip';
import { useCompany } from 'entities/company';



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
  const { companyId } = useCompany();
  const { setSelectedPeriod } = useDashboardData();
  const [openSelect, setOpenSelect] = useState(false);


  const handleChangePeriod = (e: SelectChangeEvent) => {
    setSelectedPeriod({ companyId, period: { type: e.target.value as DashboardPeriodType } });
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
        defaultValue = ''
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
