import { FC, memo, MouseEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { f } from 'app/styles';
import { ConfiguratorTextTitle, ConfiguratorTextfieldItem, RowWrapper } from 'shared/ui/configurators-components';
import { ItemStylesField } from 'entities/card-item';



interface Props {
  defaultValue : number | string | undefined
  onChange     : (field: ItemStylesField, value: number | string) => void
}


/** border-radius */
export const BorderRadius: FC<Props> = memo(({ defaultValue = 0, onChange }) => {
  
  const handleSubmit = (e: MouseEvent, value: number | string) => onChange('borderRadius', value);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle title='border-radius' toolTitle='border-radius' bold />

      <Box sx={{ ...f('-c') }}>
        <ConfiguratorTextfieldItem
          type         = 'number'
          defaultValue = {defaultValue}
          width        = '40px'
          onCallback   = {handleSubmit}
          onSubmit     = {handleSubmit}
        />
        <Typography ml={1}>px</Typography>
      </Box>
    </RowWrapper>
  )
});
