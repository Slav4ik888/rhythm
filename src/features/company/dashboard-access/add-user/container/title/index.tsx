import { FC } from 'react';
import Typography, { TypographyOwnProps } from '@mui/material/Typography';
import { MDDivider } from 'shared/ui/mui-design-components';



type Props = {
  label   : string
  variant : TypographyOwnProps['variant']
};

export const Title: FC<Props> = ({ label, variant }) => (
  <>
    <Typography variant={variant} align='center' color='text.dark' mt={2}>
      {label}
    </Typography>

    <MDDivider />
  </>
);
