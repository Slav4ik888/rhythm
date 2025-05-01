import { FC, memo, useCallback } from 'react';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import AddCardIcon from '@mui/icons-material/AddCard';
import { useDashboardView } from 'entities/dashboard-view';



const useStyles = () => ({
  button: {
    root: {
      fontSize: '0.7rem',
    }
  },
  icon: {
    color: '#000000',
    fontSize : '20px',
  },
});


interface Props {
}

/** AddNewChart into the charts */
export const AddNewChart: FC<Props> = memo(({ }) => {
  const sx = useStyles();
  const { selectedItem, changeOneSettingsField } = useDashboardView();


  const handleClick = useCallback(() => {
    const value = selectedItem.settings?.charts ? [...selectedItem.settings?.charts] : [];
    value.push({ chartType: 'line' });

    changeOneSettingsField({ field: 'charts', value });
  }, [selectedItem, changeOneSettingsField]);


  return (
    <Tooltip title="Добавить новый график">
      <MDButton
        variant   = 'outlined'
        color     = 'black'
        sx        = {sx.button}
        startIcon = {<AddCardIcon sx={sx.icon} />}
        onClick   = {handleClick}
      >
        график
      </MDButton>
    </Tooltip>
  )
});
