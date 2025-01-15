import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Tooltip } from 'shared/ui/tooltip';
import { Checkbox } from '@mui/material';



/** 
 * График перевёрнутый или нет. Пример - если задолженность уменьшается то это рост
 */
export const InvertedData: FC = memo(() => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();
  const [checked, setChecked] = useState(Boolean(selectedItem.settings?.inverted));


  useEffect(() => {
    setChecked(Boolean(selectedItem.settings?.inverted));
  },[selectedItem]);


  const handleToggle = useCallback(() => {
    if (Boolean(selectedItem.settings?.inverted)) {
      changeOneSettingsField({ field: 'inverted', value: false });
    }
    else {
      changeOneSettingsField({ field: 'inverted', value: true });
      setChecked(true);
    }
  }, [selectedItem, changeOneSettingsField]);

  const toolTitle = 'Перевёрнутый график или нет. Пример - если задолженность уменьшается то это рост';


  return (
    <RowWrapper sx={{ mt: 2 }}>
      <ConfiguratorTextTitle bold title='Inverted' toolTitle={toolTitle} />
      
      <Tooltip title = {toolTitle}>
        <Checkbox
          size       = 'small'
          checked    = {checked}
          inputProps = {{ 'aria-label': 'Inverted' }}
          onChange   = {handleToggle}
        />
      </Tooltip>
    </RowWrapper>
  )
});
