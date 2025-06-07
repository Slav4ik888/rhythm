import { FC, useMemo, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Box from '@mui/material/Box';
import { PageLoader } from 'widgets/page-loader';
import { useDocs } from 'entities/docs';



export const ShowPolicyText: FC = memo(() => {
  const { loading, policy, serviceGetPolicy } = useDocs();
  
  const policyLoaded = useMemo(() => {
    if (! policy) serviceGetPolicy();
    return policy;
  }, [policy]);

  return (
    <Box sx={{ minHeight: 100 }}>
      <PageLoader loading={loading} />
      {/* @ts-ignore */}
      <ReactMarkdown plugins={[gfm]} linkTarget="_blank" children={policyLoaded} />
    </Box>
  );
});
