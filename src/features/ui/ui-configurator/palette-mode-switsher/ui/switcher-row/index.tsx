import { FC, memo } from 'react';
import { SwitcherItem } from '../../../components/switcher-item';



interface Props {
  darkMode : boolean
  onToggle : () => void
}

export const PaletteModeSwitcherRowComponent: FC<Props> = memo(({ darkMode, onToggle }) => (
  <SwitcherItem
    title     = 'Светлая тема'
    checked   = {! darkMode}
    ariaLabel = 'PaletteModeSwitcher'
    onToggle  = {onToggle}
  />
));
