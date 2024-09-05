import { FC, memo } from 'react';
import { pxToRem } from 'app/providers/theme';
import { DashboardPeriodType, selectPeriodType } from 'entities/dashboard';
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
  storePeriodType : DashboardPeriodType
  onClick         : () => void
}

export const PeriodTypeChip: FC<Props> = memo(({ storePeriodType, onClick }) => {
  const sx = useStyles();
  // const storePeriodType = useSelector(selectPeriodType);


  return (
    <Chip
      label   = {storePeriodType}
      sx      = {sx.root}
      onClick = {onClick}
    />
  )
});
