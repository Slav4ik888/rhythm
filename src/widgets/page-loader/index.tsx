import { FC, memo } from 'react';
import { useUI } from 'entities/ui';
import { PageLoaderContainer } from './container';
import { __devLog } from 'shared/lib/tests/__dev-log';



type Props = {
  loading? : boolean
  text?    : string
}

/**
 * v.2025-06-16
 * Center block loader with text message
 */
export const PageLoader: FC<Props> = memo(({ loading, text }) => {
  const { pageText } = useUI();

  if (! pageText && ! loading) return null;

  return (
    <PageLoaderContainer
      loading = {Boolean(pageText)}
      text    = {text}
    />
  )
});
