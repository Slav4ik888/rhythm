import { FC, memo, useState, MouseEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextTitle, SelectValue, TextfieldItemNumber } from 'shared/ui/configurators-components';
import { BorderStyleType, ItemStylesField, arrayBorderStyles } from 'entities/card-item';
import { TextField } from 'shared/ui/containers';



const useStyles = () => ({
  root: {
    ...f('-c-sb'),
    py : 0.5,
  },
  inPx: {
    ...f('-c'),
  },
});


interface Props {
  borderStyle : BorderStyleType | undefined
  borderWidth : number | undefined
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
  const sx = useStyles();
  const [selectedValue, setSelectedValue] = useState<BorderStyleType>(borderStyle);
  
  const handleSelectedValue = (selected: BorderStyleType) => {
    setSelectedValue(selected);
    onChange('borderStyle', selected);
  };

  const handleSubmitWidth = (e: MouseEvent, value: number | string) => onChange('borderWidth', value);
  const handleSubmitColor = (e: MouseEvent, value: number | string) => onChange('borderColor', value);


  return (
    <Box sx={sx.root}>
      <ConfiguratorTextTitle title='border-style' toolTitle='border-style' bold />

      <Box sx={sx.inPx}>
        <TextfieldItemNumber
          defaultValue = {borderWidth}
          width        = '40px'
          onSubmit     = {handleSubmitWidth}
        />
        <Typography>px</Typography>
      </Box>
      
      <SelectValue
        selectedValue = {selectedValue}
        array         = {arrayBorderStyles}
        // @ts-ignore
        onSelect      = {handleSelectedValue}
      />

      <TextField
        defaultValue = {borderColor}
        onBlur       = {handleSubmitColor}
        onSubmit     = {handleSubmitColor}
      />
    </Box>
  )
});
