import { FC, memo } from 'react';
import { pxToRem } from 'app/providers/theme';
import { DASHBOARD_PERIOD_TEXT, selectSelectedPeriod } from 'entities/dashboard';
import { Chip } from '@mui/material';
import { useSelector } from 'react-redux';



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
  const storeSelectPeriod = useSelector(selectSelectedPeriod);
  const storePeriodType = storeSelectPeriod?.type;


  return (
    <Chip
      label   = {DASHBOARD_PERIOD_TEXT[storePeriodType]}
      sx      = {sx.root}
      onClick = {onClick}
    />
  )
});
