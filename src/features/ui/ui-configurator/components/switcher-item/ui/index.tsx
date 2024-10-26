import { FC, memo } from 'react';
import { Box, Switch } from '@mui/material';
import { UIConfiguratorItemWrapper } from '../../ui-configurator-item-wrapper';



interface Props {
  title     : string
  checked   : boolean
  ariaLabel : string
  onToggle  : () => void
}

export const SwitcherItem: FC<Props> = memo(({ title, checked, ariaLabel, onToggle }) => (
  <UIConfiguratorItemWrapper>
    {title}

    <Switch
      size       = "small"
      checked    = {checked}
      inputProps = {{ 'aria-label': ariaLabel }}
      onChange   = {onToggle}
    />
  </UIConfiguratorItemWrapper>
));
