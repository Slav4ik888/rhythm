import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Night from '@mui/icons-material/Brightness4';
import Day from '@mui/icons-material/Brightness7';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'shared/styles';



const useStyles = (theme: CustomTheme) => ({
  root: {
    cursor: 'pointer'
  },
  icon: {
    color  : (theme as CustomTheme).palette.configurator.title.headerSubtitle,
    cursor : 'pointer'
  },
});


interface Props {
  darkMode : boolean
  onToggle : () => void
}

export const PaletteModeSwitcherIconComponent: FC<Props> = memo(({ darkMode, onToggle }) => {
  const sx = useStyles(useTheme());

  return (
    <IconButton
      sx      = {sx.root}
      color   = 'inherit'
      onClick = {onToggle}
    >
      <Tooltip
        title  = {`Переключить на ${darkMode ? 'светлую' : 'тёмную'} тему`}
        sxSpan = {f('-c-c')}
      >
        {
          darkMode ? <Day sx={sx.icon} /> : <Night sx={sx.icon} />
        }
      </Tooltip>
    </IconButton>
  )
});
