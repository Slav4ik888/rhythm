import { FC, memo, useCallback } from 'react';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { ViewItem, ViewItemStylesField } from 'entities/dashboard-view';
import { ColorPicker } from 'shared/lib/colors-picker';
import { SelectBorderStyle } from './select-border-style';
import { InputByScheme } from '../../../base-features-components';



interface Props {
  selectedItem : ViewItem | undefined
  onChange     : (field: ViewItemStylesField, value: number | string) => void
}

/** border: width style color */
export const BorderRow: FC<Props> = memo(({ selectedItem, onChange }) => {
  const handleSubmitColor = useCallback((value: string) => onChange('borderColor', value), [onChange]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border' toolTitle='border' bold />

      <Box sx={{ ...f('-c-fe') }}>
        <InputByScheme
          type         = 'number'
          scheme       = 'styles.borderWidth'
          width        = '2.5rem'
          selectedItem = {selectedItem}
        />
        
        <SelectBorderStyle
          selectedItem = {selectedItem}
          onChange     = {onChange}
        />

        <ColorPicker
          defaultColor = {selectedItem?.styles?.borderColor || 'none'}
          onChange     = {handleSubmitColor}
        />
      </Box>
    </RowWrapper>
  )
});
