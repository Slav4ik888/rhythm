import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { MDDivider } from 'shared/ui/mui-design-components';



type Props = {
  label: string
};

export const Title: FC<Props> = ({ label }) => (
  <>
    <Typography variant='body1' align='center' color='text.dark' mt={2}>
      {label}
    </Typography>

    <MDDivider />
  </>
);
