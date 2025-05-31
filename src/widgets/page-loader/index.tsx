import { FC, memo} from 'react';
import { CircularProgress } from 'shared/ui/circular-progress';


type Props = {
  loading?: boolean
}

/**
 * v.2023-08-20
 * Center & block loader
 */
export const PageLoader: FC<Props> = memo(({ loading = false }) => (
  <CircularProgress
    block
    center
    size    = {60}
    loading = {loading}
    id      = 'PageLoaderId'
  />
));
