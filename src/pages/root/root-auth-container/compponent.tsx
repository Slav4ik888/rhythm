import { FC, memo } from 'react';



export const RootAuthComponent: FC = memo(() => {
  // const
  //   { isVerified } = useUser(),
  //   { company } = useCompany();
  
  // if (! isVerified) return <GreetingOffer />;
  // if (isDisplayDemoSubscribeOffer(company?.courseAccess))return <DemoSubscribeOffer />
  // if (isDisplaySubscribeOffer(company, isVerified, isSuper)) return <SubscribeOffer />

  return (<>
    <div>RootAuthComponent ...</div>
    {
      [...new Array(100)].map((_, idx) => <p key={idx}>Any some text...</p>)
    }
  </>)
});
