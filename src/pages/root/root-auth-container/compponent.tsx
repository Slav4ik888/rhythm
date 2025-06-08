import { Box } from '@mui/material';
import { FC, memo } from 'react';
import { f } from 'shared/styles';



export const RootAuthComponent: FC = memo(() =>
  // const
  //   { isVerified } = useUser(),
  //   { company } = useCompany();

  // if (! isVerified) return <GreetingOffer />;
  // if (isDisplayDemoSubscribeOffer(company?.courseAccess))return <DemoSubscribeOffer />
  // if (isDisplaySubscribeOffer(company, isVerified, isSuper)) return <SubscribeOffer />

   (
    <Box sx={f('c-c-c')}>
      Rhythm of Company
    </Box>
  )
);
