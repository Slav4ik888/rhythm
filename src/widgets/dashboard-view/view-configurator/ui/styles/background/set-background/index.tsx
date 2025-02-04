import { FC, memo, useEffect, useMemo, useState } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField, RgbaString, useDashboardView } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { Checkbox } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { splitGradinetRgba } from './utils';
import { SetLinearGradient } from './set-linear-gradient';



interface Props {
  onChange: (field: ViewItemStylesField, value: number | string) => void
}


/** background */
export const SetBackground: FC<Props> = memo(({ onChange }) => {
  const { styleValueByField = 'rgba(255, 255, 255, 0)' } = useDashboardView({ field: 'background' });

  const gradients = useMemo(() => splitGradinetRgba(styleValueByField as string), [styleValueByField]);

  const [checked, setChecked] = useState(gradients.length === 3); // if 'linear-gradient(195deg, #bbdefb, #64b5f6)';
  const handleToggle = () => setChecked(! checked);
  
  useEffect(() => {
    setChecked(gradients.length === 3);
  }, [styleValueByField]);
  
  const handleBackground = (value: string) => onChange('background', value as unknown as string);


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
              defaultValue = {styleValueByField as RgbaString}
              gradients    = {gradients}
              onChange     = {onChange}
            />
          : <ColorPicker
              defaultColor = {styleValueByField as RgbaString}
              onChange     = {handleBackground}
            />
      }
    </RowWrapper>
  )
});
