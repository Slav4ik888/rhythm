import { FC, memo, MouseEvent } from 'react';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ColorPicker } from 'shared/lib/colors-picker';
import { InputByScheme } from '../../../../base-features-components';
import { getBoxShadowValue } from './utils';



const sx = {
  wrapper: {
    mx: 1,
  },
  field: {
    width: '2rem',
  },
  input: {
    textAlign : 'center',
    padding   : '2px 4px',
  }
};


interface Props {
  color    : string
  onChange : (value: string | number, index: number) => void
}

/**
 * box-shadow component
 */
export const BoxShadowSetupComponent: FC<Props> = memo(({ color, onChange }) => {
  return (
    <Box sx={{ ...f('-c') }}>
      <InputByScheme
        type      = 'number'
        scheme    = 'styles.boxShadow'
        width     = '2rem'
        toolTitle = 'offset-x'
        clear     = {0}
        sx        = {sx}
        transform = {(v: string | number) => getBoxShadowValue(v, 0)}
        onChange  = {(e: MouseEvent, v: string | number) => onChange(v, 0)}
      />
      <InputByScheme
        type      = 'number'
        scheme    = 'styles.boxShadow'
        width     = '2rem'
        toolTitle = 'offset-y'
        clear     = {0}
        sx        = {sx}
        transform = {(v: string | number) => getBoxShadowValue(v, 1)}
        onChange  = {(e: MouseEvent, v: string | number) => onChange(v, 1)}
      />
      <InputByScheme
        type      = 'number'
        scheme    = 'styles.boxShadow'
        width     = '2rem'
        toolTitle = 'blur-radius'
        clear     = {0}
        sx        = {sx}
        transform = {(v: string | number) => getBoxShadowValue(v, 2)}
        onChange  = {(e: MouseEvent, v: string | number) => onChange(v, 2)}
      />
      <InputByScheme
        type      = 'number'
        scheme    = 'styles.boxShadow'
        width     = '2rem'
        toolTitle = 'spread-radius'
        clear     = {0}
        sx        = {sx}
        transform = {(v: string | number) => getBoxShadowValue(v, 3)}
        onChange  = {(e: MouseEvent, v: string | number) => onChange(v, 3)}
      />

      <ColorPicker
        defaultColor = {color}
        onChange     = {(v: string | number) => onChange(v, 4)}
      />
    </Box>
  )
});
