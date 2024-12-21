import { FC, memo, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { CardItemId, ItemStylesField } from 'entities/card-item';
import { f } from 'app/styles';
import { ChangeStyleTextfieldNumberItemComponent as TextfieldItemComponent } from './textfield';
import { useValue } from 'shared/lib/hooks';
import { useDashboard } from 'entities/dashboard';
import { StyleItemWrapper } from '../style-item-wrapper';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme) => ({
  textBox: {
    ...f('c-c-c'),
    width        : '80px',
    height       : '1.4375em;',
    border       : `1px solid ${theme.palette.dark.light}`,
    borderRadius : '4px',
  },
  smallTitle: {
    fontSize   : '0.9rem',
    fontWeight : 'normal',
  },
});


interface Props {
  title?      : string
  field       : ItemStylesField
  disabled?   : boolean
  cardItemId  : CardItemId
  onCallback? : (field: ItemStylesField, value: number) => void
  onSubmit    : (field: ItemStylesField, value: number) => void
}


export const ChangeStyleTextfieldNumberItem: FC<Props> = memo(({ title, field, disabled, cardItemId, onCallback, onSubmit }) => {
  const sx = useStyles(useTheme());
  const { styleValueByField } = useDashboard({ cardItemId, field });
  const hookOpen = useValue();
  
  const handleOpen = () => {
    if (disabled) return;
    hookOpen.setOpen();
  };

  const handleCloseCallback = useCallback((field: ItemStylesField, value: number) => {
    if (onCallback) {
      onCallback(field, value);
    }
  },[field, onCallback]);

  const handleCloseSubmit = useCallback((field: ItemStylesField, value: number) => {
    onSubmit(field, value);
    hookOpen.setClose();
  },[field, hookOpen.setClose, onSubmit]);
  

  return (
    <StyleItemWrapper>
      {
        ! hookOpen.open
          ? <Box
              sx      = {sx.textBox}
              onClick = {handleOpen}
            >
              {styleValueByField}
            </Box>
          : <TextfieldItemComponent
              field        = {field}
              defaultValue = {styleValueByField as number}
              onCallback   = {handleCloseCallback}
              onSubmit     = {handleCloseSubmit}
            />
      }
      {
        title && <Typography sx={sx.smallTitle}>{title}</Typography>
      }
    </StyleItemWrapper>
  )
});
