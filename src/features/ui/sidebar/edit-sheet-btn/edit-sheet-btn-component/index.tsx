import { FC, memo } from 'react';
import { f, pxToRem } from 'shared/styles';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useUIConfiguratorController } from 'app/providers/theme';
// eslint-disable-next-line no-restricted-imports
import { alpha } from '@mui/material';



interface Props {
  isHover : boolean
  onClick : () => void
}


export const EditSheetBtnComponent: FC<Props> = memo(({ isHover, onClick }) => {
  // const [configuratorState] = useUIConfiguratorController();
  // const { sidebarMini } = configuratorState;

  if (! isHover) return null;

  return (
    <Tooltip title='Изменить'>
      <IconButton
        sx={(theme) => ({
          position   : 'absolute',
          top        : pxToRem(10),
          right      : pxToRem(0),
          cursor     : 'pointer',
          transition : theme.transitions.create(['color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter,
          }),
          '&:hover': {
            '& > svg': {
              color: alpha((theme as CustomTheme).palette.text.main, 0.5),
            },
            '& > p': {
              color: alpha((theme as CustomTheme).palette.text.main, 0.5),
            }
          },
        })}
        onClick={onClick}
      >
        <EditIcon
          sx={{
            fontSize : '1rem',
            color    : 'text.light',
          }}
        />
      </IconButton>
    </Tooltip>
  )
});
