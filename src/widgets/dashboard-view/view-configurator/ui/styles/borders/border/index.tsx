import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItemStylesField } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { SelectBorderStyle } from './select-border-style';
import { InputByScheme } from '../../../base-features-components';



interface Props {
  borderColor : string | undefined
  onChange    : (field: ViewItemStylesField, value: number | string) => void
}

/** border: width style color */
export const BorderRow: FC<Props> = memo(({ borderColor = 'none', onChange }) => {

  const handleSubmitColor = (value: string) => onChange('borderColor', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border' toolTitle='border' bold />

      <Box sx={{ ...f('-c-fe') }}>
        <InputByScheme
          type   = 'number'
          scheme = 'styles.borderWidth'
          width  = '2.5rem'
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
