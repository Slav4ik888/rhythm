import { FC, memo, useState, MouseEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextfieldItem, ConfiguratorTextTitle, RowWrapper, SelectValue } from 'shared/ui/configurators-components';
import { BorderStyleType, ItemStylesField, arrayBorderStyles } from 'entities/card-item';
import { ColorPicker } from 'shared/lib/colors-picker';



interface Props {
  borderStyle : BorderStyleType | undefined
  borderWidth : number | string | undefined
  borderColor : string | undefined
  onChange    : (field: ItemStylesField, value: number | string) => void
}


/** border: width style color */
export const Border: FC<Props> = memo(({
  borderStyle = 'none',
  borderWidth = 0,
  borderColor = 'none',
  onChange
}) => {
  const [selectedValue, setSelectedValue] = useState<BorderStyleType>(borderStyle);
  
  const handleSelectedValue = (selected: BorderStyleType) => {
    setSelectedValue(selected);
    onChange('borderStyle', selected);
  };

  const handleSubmitWidth = (e: MouseEvent, value: number | string) => onChange('borderWidth', value);
  const handleSubmitColor = (value: string) => onChange('borderColor', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border' toolTitle='border' bold />

      <Box sx={{ ...f('-c-fe') }}>
        <Box sx={{ ...f('-c-fe') }}>
          <ConfiguratorTextfieldItem
            type         = 'number'
            defaultValue = {borderWidth}
            width        = '40px'
            onCallback   = {handleSubmitWidth}
            onSubmit     = {handleSubmitWidth}
          />
          <Typography ml={1}>px</Typography>
        </Box>
        
        <SelectValue
          selectedValue = {selectedValue}
          array         = {arrayBorderStyles}
          sx            = {{ root: { width: '80px', mr: 1 }}}
          // @ts-ignore
          onSelect      = {handleSelectedValue}
        />

        <ColorPicker
          defaultColor = {borderColor}
          onChange     = {handleSubmitColor}
        />
      </Box>
    </RowWrapper>
  )
});
