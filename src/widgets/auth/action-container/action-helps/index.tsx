import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { ActionToggle } from './action-toggle';
import { RecoveryPassword } from './recovery-password';
import { AuthType } from 'shared/ui/pages';



type Props = {
  type: AuthType;
}

export const ActionHelps: FC<Props> = memo(({ type }) => (
    <Box sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
      <ActionToggle type={type} />
      <RecoveryPassword type={type} />
    </Box>
  ));
