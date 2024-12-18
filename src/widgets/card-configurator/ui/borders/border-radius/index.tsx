import { FC, memo, MouseEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextTitle, ConfiguratorTextfieldItem } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';



const useStyles = () => ({
  root: {
    ...f('-c-sb'),
    py : 0.5,
  }
});


interface Props {
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}


/** border-radius */
export const BorderRadius: FC<Props> = memo(({ defaultValue = 0, onChange }) => {
  const sx = useStyles();
  

  const handleSubmit = (e: MouseEvent, value: number | string) => {
    onChange('borderRadius', value);
  };


  return (
    <Box sx={sx.root}>
      <ConfiguratorTextTitle title='border-radius' toolTitle='border-radius' bold />

      <Box sx={{ ...f('-c') }}>
        <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {defaultValue}
          width        = '50px'
          onSubmit     = {handleSubmit}
        />
        <Typography ml={1}>px</Typography>
      </Box>
    </Box>
  )
});
