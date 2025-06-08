import { FC, memo, useCallback, useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { BoxShadowSetupContainer } from './box-shadow-setup';
import { Tooltip } from 'shared/ui/tooltip';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** box-shadow */
export const BoxShadowRow: FC<Props> = memo(({ selectedItem, onChange }) => {
  const [checked, setChecked] = useState(Boolean(selectedItem?.styles?.boxShadow));

  useEffect(() => {
    setChecked(Boolean(selectedItem?.styles?.boxShadow));
  }, [selectedItem, setChecked]);


  const handleToggle = useCallback(() => {
    if (selectedItem?.styles?.boxShadow) {
      onChange('boxShadow', '');
    }
    else {
      onChange('boxShadow', '1px 1px 3px 0px rgba(184, 184, 184, 1)');
      setChecked(true);
    }
  }, [selectedItem, onChange, setChecked]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'box-shadow'
        toolTitle = {`1px 1px 3px 0px rgba(184, 184, 184, 1) =>
        offset-x | offset-y | blur-radius | spread-radius | color`}
      />
      <Tooltip title='background gradient'>
        <Checkbox
          size       = 'small'
          checked    = {checked}
          inputProps = {{ 'aria-label': 'background' }}
          onChange   = {handleToggle}
        />
      </Tooltip>
      {
        checked
          ? <BoxShadowSetupContainer
              selectedItem = {selectedItem}
              onChange     = {onChange}
            />
          : null
      }
    </RowWrapper>
  )
});
