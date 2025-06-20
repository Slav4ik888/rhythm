import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import { useCompany } from 'entities/company';



export const RootAuthComponent: FC = memo(() => {
  const { company } = useCompany();

  const companyName = company?.companyName ? ` "${company.companyName}"!` : '!';

  return (
    <Box sx={f('c-c-c')}>
      {`Ритм компании${companyName}`}
    </Box>
  )
});
