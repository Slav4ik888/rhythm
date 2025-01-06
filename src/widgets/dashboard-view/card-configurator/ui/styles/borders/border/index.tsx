import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField, useDashboardView } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { SelectBorderStyle } from './select-border-style';



interface Props {
  borderColor : string | undefined
  onChange    : (field: ItemStylesField, value: number | string) => void
}

/** border: width style color */
export const BorderRow: FC<Props> = memo(({ borderColor = 'none', onChange }) => {
  const { styleValueByField } = useDashboardView({ field: 'borderWidth' });

  const handleSubmitColor = (value: string) => onChange('borderColor', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border' toolTitle='border' bold />

      <Box sx={{ ...f('-c-fe') }}>
        <ChangeStyleItem
          type       = 'number'
          value      = {styleValueByField as number}
          field      = 'borderWidth'
          width      = '2.5rem'
          onCallback = {onChange}
          onSubmit   = {onChange}
        />
        
        <SelectBorderStyle onChange={onChange} />

        <ColorPicker
          defaultColor = {borderColor}
          onChange     = {handleSubmitColor}
        />
      </Box>
    </RowWrapper>
  )
});
