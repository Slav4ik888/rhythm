import { FC, memo } from 'react';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import AddCardIcon from '@mui/icons-material/AddCard';
import { ViewItemType } from 'entities/dashboard-view';
import { capitalizeFirst } from 'shared/helpers/strings';
import { pxToRem } from 'shared/styles';



const useStyles = (color: string) => ({
  button: {
    root: {
      color,
      fontSize: '0.7rem',
    }
  },
  icon: {
    color,
    fontSize : pxToRem(20),
  },
});


interface Props {
  type    : ViewItemType
  color   : string
  onClick : (type: ViewItemType) => void
}

/** Btn component */
export const AddBtn: FC<Props> = memo(({ type, color, onClick }) => {
  const sx = useStyles(color);
  const title = capitalizeFirst(type);

  const handleClick = () => onClick(type);

  return (
    <Tooltip title={`Добавить новый элемент "${title}"`}>
      <MDButton
        variant   = 'outlined'
        color     = 'dark'
        sx        = {sx.button}
        startIcon = {<AddCardIcon sx={sx.icon} />}
        onClick   = {handleClick}
      >
        {title}
      </MDButton>
    </Tooltip>
  )
});
