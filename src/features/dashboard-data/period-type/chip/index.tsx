import { FC, memo } from 'react';
import { pxToRem } from 'shared/styles';
import { DASHBOARD_PERIOD_TEXT, useDashboardData } from 'entities/dashboard-data';
import { Chip } from '@mui/material';



const useStyles = () => ({
  root: {
    position: 'absolute',
    top: pxToRem(3),
    right: pxToRem(10),
    zIndex: 10
  }
});


interface Props {
  onClick: () => void
}

export const PeriodTypeChip: FC<Props> = memo(({ onClick }) => {
  const sx = useStyles();
  const { selectedPeriod } = useDashboardData();
  const storePeriodType = selectedPeriod?.type;


  return (
    <Chip
      label   = {DASHBOARD_PERIOD_TEXT[storePeriodType]}
      sx      = {sx.root}
      onClick = {onClick}
    />
  )
});
