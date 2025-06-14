import * as React from 'react';
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpIcon from '@mui/icons-material/Help';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme) => ({
  root: {
    display    : 'flex',
    alignItems : 'center',
    color      : theme.palette.primary.contrastText,
    background : theme.palette.primary.main,
    minHeight  : '62px',
    boxShadow  : '0px 0px 2px 2px #bdbdbd',
    m          : 0,
    mb         : '3px',
    p          : 0
  },
  title: {
    textAlign  : 'center',
    width      : '100%',
    ml         : 2,
    pl         : 4
  },
  icon: {
    color      : theme.palette.primary.contrastText
  },
  iconClose: {
    color      : theme.palette.primary.contrastText,
    mr         : 1
  }
});


enum QuestionIconType {
  HelpOutlined = 'HelpOutlined',
  Help = 'Help',
}


type Props = {
  children?         : string
  question?         : string
  questionIconType? : QuestionIconType
  onClose           : () => void
}


export const DialogTitle: React.FC<Props> = (props: Props) => {
  const { children, question, questionIconType, onClose, ...other } = props;

  const sx = useStyles(useTheme() as unknown as CustomTheme);

  let helpIcon: JSX.Element;
  switch (questionIconType) {
    case QuestionIconType.Help: helpIcon = <HelpIcon />; break;
    case QuestionIconType.HelpOutlined: helpIcon = <HelpOutlinedIcon />; break;
    default: helpIcon = <HelpIcon />;
  }


  return (
    <MuiDialogTitle
      sx={sx.root}
      {...other}
    >
      <Typography variant='h6' component='div' sx={sx.title}>
        {
          children
        }
      </Typography>
      {
        question ? (
          <Tooltip title={question} placement='bottom' arrow>
            <IconButton aria-label='question' sx={sx.icon}>
              {
                helpIcon
              }
            </IconButton>
          </Tooltip>
        ) : null
      }
      {
        onClose ? (
          <IconButton onClick={onClose} aria-label='close' sx={sx.iconClose}>
            <CloseIcon />
          </IconButton>
        ) : null
      }
    </MuiDialogTitle>
  );
};
