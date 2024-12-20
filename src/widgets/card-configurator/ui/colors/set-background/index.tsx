import { FC, memo, useMemo, useState } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';
import { Checkbox } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { splitGradinet } from './split-gradient';
import { SetLinearGradient } from './background';



interface Props {
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}


/** background */
export const SetBackground: FC<Props> = memo(({ defaultValue = '', onChange }) => {
  const gradients = useMemo(() => splitGradinet(defaultValue as string), []);

  const [checked, setChecked] = useState(gradients.length === 3); // if 'linear-gradient(195deg, #bbdefb, #64b5f6)';
  const handleToggle = () => setChecked(! checked);
  
  const handleBackground = (value: string) => onChange('background', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'background'
        toolTitle = 'background'
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
          ? <SetLinearGradient
              defaultValue = {defaultValue}
              gradients    = {gradients}
              onChange     = {onChange}
            />
          : <ColorPicker
              defaultColor = {defaultValue as string}
              onChange     = {handleBackground}
            />
      }
    </RowWrapper>
  )
});
