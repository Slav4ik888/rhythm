import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { ItemStyles } from 'entities/card-item';



interface Props {
  content? : string
  sx?      : ItemStyles
}


/** Item box content */
export const DashboardBodyContentItemBoxContent: FC<Props> = memo(({ content, sx }) => {
  console.log('DashboardBodyContentItemBoxContent');

  return (
    <Box>
      
    </Box>
  )
});
