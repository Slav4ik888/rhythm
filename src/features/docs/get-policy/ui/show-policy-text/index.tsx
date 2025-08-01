import { FC, useMemo, memo } from 'react';
import Box from '@mui/material/Box';
import { PageLoader } from 'widgets/page-loader';
import { useDocs } from 'entities/docs';
import { MarkdownWithExternalLinks } from 'shared/lib/markdown';



export const ShowPolicyText: FC = memo(() => {
  const { loading, policy, serviceGetPolicy } = useDocs();

  const policyLoaded = useMemo(() => {
    if (! policy) serviceGetPolicy();
    return policy;
  }, [policy, serviceGetPolicy]);

  return (
    <Box sx={{ minHeight: 100 }}>
      <PageLoader loading={loading} text='Загрузка политики конфеденциальности...' />
      <MarkdownWithExternalLinks content={policyLoaded} />
    </Box>
  );
});
