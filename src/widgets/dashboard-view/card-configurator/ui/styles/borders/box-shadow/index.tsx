import { FC, memo, useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { BoxShadowSetupContainer } from './box-shadow-setup';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  onChange: (field: ItemStylesField, value: number | string) => void
}

/**
 * box-shadow
 */
export const BoxShadowRow: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'boxShadow' });
  
  const [checked, setChecked] = useState(Boolean(styleValueByField));

  const handleToggle = () => {
    if (Boolean(styleValueByField)) {
      onChange('boxShadow', '');
    }
    else {
      onChange('boxShadow', '1px 1px 3px 0px rgba(184, 184, 184, 1)');
      setChecked(true);
    }
  };
  
  useEffect(() => {
    setChecked(Boolean(styleValueByField));
  }, [styleValueByField]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'box-shadow'
        toolTitle = '1px 1px 3px 0px rgba(184, 184, 184, 1) => offset-x | offset-y | blur-radius | spread-radius | color'
      />
      <Tooltip title = 'background gradient'>
        <Checkbox
          size       = 'small'
          checked    = {checked}
          inputProps = {{ 'aria-label': 'background' }}
          onChange   = {handleToggle}
        />
      </Tooltip>
      {
        checked
          ? <BoxShadowSetupContainer onChange={onChange} />
          : null
      }
    </RowWrapper>
  )
});
