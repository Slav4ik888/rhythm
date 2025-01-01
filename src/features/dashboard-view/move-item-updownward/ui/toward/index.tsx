import { FC, memo } from 'react';
import UpwardIcon from '@mui/icons-material/ArrowUpward';
import DownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ml: 2
  },
  icon: {
    color    : theme.palette.dark.main,
    fontSize : '20px',
  },
});


export type TowardType = 'up' | 'down'

interface Props {
  type    : TowardType
  onClick : (type: TowardType) => void
}


export const Toward: FC<Props> = memo(({ type, onClick }) => {
  const sx = useStyles(useTheme());
  const up = type === 'up';


  return (
    <Box sx={sx.root}>
      <Tooltip title={`Переместить элемент ${up ? 'вверх' : 'вниз'}`}>
        <MDButton
          variant = 'outlined'
          color   = 'dark'
          onClick = {() => onClick(type)}
        >
          {up ? <UpwardIcon sx={sx.icon} /> : <DownwardIcon sx={sx.icon} />}
        </MDButton>
      </Tooltip>
    </Box>
  )
});