import { Button } from '@mui/material';
import { SxProps } from '@mui/system';
import { useState, useEffect, memo, FC } from 'react';



interface Props {
  sx?    : SxProps
  short? : boolean
}

/** For development testing */
export const BugButton: FC<Props> = memo(({ short, sx }) => {
  const
    label = short ? 'Err' : 'Бросить ошибку',
    [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error()
  }, [error]);

  return (
    <Button
      sx = {{ mr: 1, ...sx }}
      onClick   = {onThrow}
    >
      {label}
    </Button>
  )
});
