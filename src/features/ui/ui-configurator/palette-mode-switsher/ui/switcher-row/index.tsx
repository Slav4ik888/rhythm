import FormControl from '@mui/material/FormControl';
import { UIConfiguratorItemWrapper } from '../../../components/ui-configurator-item-wrapper';
import { FC, memo, useCallback } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { setMode, UIDispatch } from 'app/providers/theme';
import { PaletteMode } from '@mui/material/styles';
import { f } from 'shared/styles';



interface Props {
  mode     : PaletteMode
  dispatch : UIDispatch
}

export const PaletteModeSwitcherRowComponent: FC<Props> = memo(({ mode, dispatch }) => {
  const handleChange = useCallback((e: any) => {
    setMode(dispatch, e.target.value as PaletteMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UIConfiguratorItemWrapper>
      <FormControl sx={{ width: '100%' }}>
        <RadioGroup
          row
          name     = 'theme-toggle'
          value    = {mode}
          sx       = {f('-c-c')}
          onChange = {handleChange}
        >
          <FormControlLabel value='system' control={<Radio />} label='System' />
          <FormControlLabel value='light'  control={<Radio />} label='Light' />
          <FormControlLabel value='dark'   control={<Radio />} label='Dark' />
        </RadioGroup>
      </FormControl>
    </UIConfiguratorItemWrapper>
  )
});
