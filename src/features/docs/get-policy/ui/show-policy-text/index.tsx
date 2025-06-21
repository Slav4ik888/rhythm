import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { PageLoader } from 'widgets/page-loader';
import { useDocs, reducerDocs } from 'entities/docs';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useInitialEffect } from 'shared/lib/hooks';
import { MarkdownWithExternalLinks } from 'shared/lib/markdown';



const initialReducers: ReducersList = {
  docs: reducerDocs
};

export const ShowPolicyText: FC = memo(() => {
  const { loading, policy, serviceGetPolicy } = useDocs();


  useInitialEffect(() => {
    serviceGetPolicy();
  });


  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Box sx={{ minHeight: 100 }}>
        <PageLoader loading={loading} text='Загрузка политики конфеденциальности...' />
        <MarkdownWithExternalLinks content={policy} />
      </Box>
    </DynamicModuleLoader>
  );
});
