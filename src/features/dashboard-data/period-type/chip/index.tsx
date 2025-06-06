import { FC, memo } from 'react';
import { pxToRem } from 'shared/styles';
import { DASHBOARD_PERIOD_TEXT, useDashboardData } from 'entities/dashboard-data';
import { Chip } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme) => ({
  root: {
    position        : 'absolute',
    top             : pxToRem(3),
    right           : pxToRem(10),
    backgroundColor : theme.palette.mode === 'light' ? theme.palette.light.dark : theme.palette.dark.dark,
    zIndex          : 10
  }
});


interface Props {
  onClick: () => void
}

export const PeriodTypeChip: FC<Props> = memo(({ onClick }) => {
  const sx = useStyles(useTheme());
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
