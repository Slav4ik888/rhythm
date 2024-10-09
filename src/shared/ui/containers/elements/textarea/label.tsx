import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { SxCard } from 'app/styles-old/types';
import { useStyles } from './styles';



type Props = {
  label : string
  sx?   : SxCard
}

/**
 * v.2024-02-08
 */
export const Label: FC<Props> = memo(({sx: styles, label}) => {
  const sx = useStyles(styles, label.length);


  if (! label) return null
  
  return (
    <>
      <Box sx={{ ...sx.hiddenLabelBG }} />
      <Typography sx={{ ...sx.label }}>{label}</Typography>
    </>
  )
});
