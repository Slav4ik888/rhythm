import * as React from 'react';
import { Box } from '@mui/material';
import { useUI } from 'entities/ui';
import { useStyles } from './use-styles';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { WrapperContainerType } from './types';
export { WrapperContainerType }

type Props = {
  type?    : WrapperContainerType
  children : JSX.Element | JSX.Element[] | JSX.Element[][]
}


export const WrapperContainer: React.FC<Props> = ({ type, children }) => {
  const
    { screenFormats } = useUI(),
    sx = useStyles(useTheme() as unknown as CustomTheme, screenFormats, type);

  return (
    <Box sx={sx.root}>
      {
        children
      }
    </Box>
  );
};
