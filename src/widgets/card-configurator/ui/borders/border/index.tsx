import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { ChangeStyleItem, ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField, CardItemId, useDashboardView } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { BorderStyle } from './border-style';



interface Props {
  cardItemId  : CardItemId
  borderColor : string | undefined
  onChange    : (field: ItemStylesField, value: number | string) => void
}

/** border: width style color */
export const Border: FC<Props> = memo(({ cardItemId, borderColor = 'none', onChange }) => {
  const { styleValueByField } = useDashboardView({ cardItemId, field: 'borderWidth' });

  const handleSubmitColor = (value: string) => onChange('borderColor', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border' toolTitle='border' bold />

      <Box sx={{ ...f('-c-fe') }}>
        <ChangeStyleItem
          value      = {styleValueByField as number}
          field      = 'borderWidth'
          width      = '2.5rem'
          onCallback = {onChange}
          onSubmit   = {onChange}
        />
        
        <BorderStyle
          cardItemId = {cardItemId}
          onChange   = {onChange}
        />

        <ColorPicker
          defaultColor = {borderColor}
          onChange     = {handleSubmitColor}
        />
      </Box>
    </RowWrapper>
  )
});
