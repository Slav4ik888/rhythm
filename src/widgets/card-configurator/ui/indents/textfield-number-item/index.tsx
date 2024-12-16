import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { f } from 'app/styles';
import { ChangeStyleTextfieldNumberItemComponent as TextfieldItemComponent } from './textfield';
import { useValue } from 'shared/lib/hooks';
import { useDashboard } from 'entities/dashboard';
import { StyleItemWrapper } from '../style-item-wrapper';



const useStyles = () => ({
  textBox: {
    ...f('c-c-c'),
    width        : '80px',
    height       : '1.4375em;',
    border       : '1px solid #666',
    borderRadius : '4px',
  },
  smallTitle: {
    fontSize   : '0.9rem',
    fontWeight : 'normal',
  },
});


interface Props {
  title      : string
  field      : ItemStylesField
  cardItemId : CardItemId
  onSubmit   : (field: ItemStylesField, value: number) => void
}


export const ChangeStyleTextfieldNumberItem: FC<Props> = memo(({ title, field, cardItemId, onSubmit }) => {
  const sx = useStyles();
  const { styleByField } = useDashboard({ cardItemId, field });
  const hookOpen = useValue();
  
  const handleOpen = () => hookOpen.setOpen();

  const handleClose = (field: ItemStylesField, value: number) => {
    onSubmit(field, value);
    hookOpen.setClose();
  };
  

  return (
    <StyleItemWrapper>
      {
        ! hookOpen.open
          ? <Box
              sx      = {sx.textBox}
              onClick = {handleOpen}
            >
              {styleByField}
            </Box>
          : <TextfieldItemComponent
              field        = {field}
              defaultValue = {styleByField as number}
              onSubmit     = {handleClose}
            />
      }
      <Typography sx={sx.smallTitle}>{title}</Typography>
    </StyleItemWrapper>
  )
});
