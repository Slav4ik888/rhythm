import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField, RgbaString, ViewItem } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { Checkbox } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { splitGradinetRgba } from './utils';
import { SetLinearGradient } from './set-linear-gradient';
import { pxToRem, SxCard } from 'shared/styles';



const sx: SxCard = {
  popover: {
    bottom: pxToRem(-260) 
  }
};

interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** background */
export const SetBackground: FC<Props> = memo(({ selectedItem, onChange }) => {
  const gradients = useMemo(() => splitGradinetRgba(selectedItem?.styles?.background as string), [selectedItem]);

  const [checked, setChecked] = useState(gradients.length === 3); // if 'linear-gradient(195deg, #bbdefb, #64b5f6)';
  const handleToggle = useCallback(() => setChecked(! checked), [checked, setChecked, onChange]);
  
  useEffect(() => {
    setChecked(gradients.length === 3);
  }, [selectedItem, setChecked]);
  
  const handleBackground = useCallback((value: string) => onChange('background', value as unknown as string), [onChange]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'background'
        toolTitle = 'background'
      />
      <Tooltip title = 'Настроить gradient'>
        <Checkbox
          size       = 'small'
          checked    = {checked}
          inputProps = {{ 'aria-label': 'background' }}
          onChange   = {handleToggle}
        />
      </Tooltip>
      {
        checked
          ? <SetLinearGradient
              defaultValue = {selectedItem?.styles?.background as RgbaString}
              gradients    = {gradients}
              selectedItem = {selectedItem}
              sx           = {sx}
              onChange     = {onChange}
            />
          : <ColorPicker
              defaultColor = {selectedItem?.styles?.background as RgbaString}
              sx           = {sx}
              onChange     = {handleBackground}
            />
      }
    </RowWrapper>
  )
});
