import { FC, memo, useEffect, useMemo, useState } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';
import { Checkbox } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { splitGradinet } from './split-gradient';
import { SetLinearGradient } from './background';
import { useDashboard } from 'entities/dashboard';



interface Props {
  cardItemId : CardItemId
  onChange   : (field: ItemStylesField, value: number | string) => void
}


/** background */
export const SetBackground: FC<Props> = memo(({ cardItemId, onChange }) => {
  const { styleValueByField } = useDashboard({ cardItemId, field: 'background' });

  const gradients = useMemo(() => splitGradinet(styleValueByField as string), [styleValueByField]);

  const [checked, setChecked] = useState(gradients.length === 3); // if 'linear-gradient(195deg, #bbdefb, #64b5f6)';
  const handleToggle = () => setChecked(! checked);
  
  useEffect(() => {
    setChecked(gradients.length === 3);
  }, [styleValueByField]);
  
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
              defaultValue = {styleValueByField}
              gradients    = {gradients}
              onChange     = {onChange}
            />
          : <ColorPicker
              defaultColor = {styleValueByField as string}
              onChange     = {handleBackground}
            />
      }
    </RowWrapper>
  )
});
