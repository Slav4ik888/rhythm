import { FC } from 'react';
import { Box } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { WrapperPanelType } from './types';


const useStyles = (theme: CustomTheme, type: WrapperPanelType) => {
  const
    document   = type === WrapperPanelType.DOCUMENT,
    rule_title = type === WrapperPanelType.RULE_TITLE;
  
  return {
    root: {
      display         : 'flex',
      alignItems      : 'center',
      color           : theme.ws.panel.color,
      background      : theme.ws.panel.background,
      borderRadius    : '4px',
      minHeight       : 50,
      height          : 50,
      mb              : rule_title ? 0 : 1,
      p               : 1
    }
  }
};


type Props = {
  type     : WrapperPanelType;
  children : React.ReactNode | JSX.Element | JSX.Element[][];
};


export const WrapperPanel: FC<Props> = ({ children, type }) => {
  const sx = useStyles(useTheme(), type);

  return (
    <Box sx={sx.root}>
      {
        children
      }
    </Box>
  );
};
