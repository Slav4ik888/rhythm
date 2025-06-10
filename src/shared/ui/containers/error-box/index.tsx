import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import { Errors } from 'shared/lib/validators';
import { CustomTheme, useTheme } from 'app/providers/theme';



const useStyles = (theme: CustomTheme, sx: any) => ({
  root: {
    width: '100%',
    ...sx.root
  },
  content: {
    ...f('-c-c'),
    width : '100%',
    // fontSize : theme.error.fontSize,
    color : theme.palette.error.main,
    ...sx.content
  }
});


type Props = {
  field?  : string
  sx?     : any
  errors? : Errors
}


/** v.2024-02-08 */
export const ErrorBox: FC<Props> = memo(({ field = '', sx: styles = {}, errors }) => {
  const { root, content } = useStyles(useTheme() as unknown as CustomTheme, styles);

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
