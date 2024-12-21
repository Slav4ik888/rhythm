import { FC, memo, useCallback, MouseEvent } from 'react';
import { Box } from '@mui/material';
import { ItemStylesField } from 'entities/card-item';
import { f } from 'app/styles';
import { useValue } from 'shared/lib/hooks';
import { StyleItemWrapper } from '../../../indents/style-item-wrapper';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ConfiguratorTextfieldItem } from 'shared/ui/configurators-components';



const useStyles = (theme: CustomTheme) => ({
  textBox: {
    ...f('c-c-c'),
    width        : '40px',
    height       : '1.4375em;',
    border       : `1px solid ${theme.palette.dark.light}`,
    borderRadius : '4px',
  },
  smallTitle: {
    fontSize   : '0.9rem',
    fontWeight : 'normal',
  },
  item: {
    bg: {
      ...f('-c'),
      mr    : 1,
    },
    field: {
      width : '40px',
    }
  }
});


interface Props {
  value       : number
  disabled?   : boolean
  onCallback? : (field: ItemStylesField, value: number) => void
  onSubmit    : (field: ItemStylesField, value: number) => void
}

/** For BoxShadow */
export const ChangeStyleTextfieldBoxShadow: FC<Props> = memo(({ value, disabled, onCallback, onSubmit }) => {
  const sx = useStyles(useTheme());
  const hookOpen = useValue();
  
  const handleOpen = () => {
    if (disabled) return;
    hookOpen.setOpen();
  };

  const handleCloseCallback = useCallback((e: MouseEvent, value: number | string) => {
    if (onCallback) {
      onCallback('boxShadow', value as number);
    }
  },[value, onCallback]);

  const handleCloseSubmit = useCallback((e: MouseEvent, value: number | string) => {
    onSubmit('boxShadow', value as number);
    hookOpen.setClose();
  },[value, hookOpen.setClose, onSubmit]);
  

  return (
    <StyleItemWrapper>
      {
        ! hookOpen.open
          ? <Box
              sx      = {sx.textBox}
              onClick = {handleOpen}
            >
              {value}
            </Box>
          : <ConfiguratorTextfieldItem
              type         = 'number'
              defaultValue = {value as number}
              sx           = {sx.item}
              onCallback   = {handleCloseCallback}
              onSubmit     = {handleCloseSubmit}
            />
      }
    </StyleItemWrapper>
  )
});
