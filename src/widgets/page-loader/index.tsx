import { FC, memo } from 'react';
import { useUI } from 'entities/ui';
import { PageLoaderContainer } from './container';
import { __devLog } from 'shared/lib/tests/__dev-log';



type Props = {
  loading?: boolean
  text?: string
}

/**
 * v.2025-06-15
 * Center block loader with text message
 */
export const PageLoader: FC<Props> = memo(({ loading, text }) => {
  const { pageLoading } = useUI();

  if (text) __devLog('PageLoader text: ', text, 'pageLoading:', pageLoading, 'loading:', loading);

  if (! pageLoading && ! loading) return null;

  return (
    <PageLoaderContainer
      loading = {pageLoading}
      text    = {text}
    />
  )
});
