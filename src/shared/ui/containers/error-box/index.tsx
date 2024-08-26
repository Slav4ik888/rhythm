import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { f_c_c, SxCard } from 'app/styles';
import { Errors } from 'shared/lib/validators';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme, sx: SxCard) => ({
  root: {
    width: '100%',
    ...sx.root
  },
  content: {
    ...f_c_c,
    width    : '100%',
    fontSize : theme.error.fontSize,
    color    : theme.error.color,
    ...sx.content
  }
});


type Props = {
  field?  : string
  sx?     : SxCard
  errors? : Errors
}


/** v.2024-02-08 */
export const ErrorBox: FC<Props> = memo(({ field = '', sx: styles = {}, errors }) => {
  const { root, content } = useStyles(useTheme(), styles);

  if (! errors?.[field]) return null;


  return (
    <Box data-testid='ErrorBox' sx={root}>
      <Box sx={content}>
        {
          errors?.[field]
        }
      </Box>
    </Box>
  )
});
