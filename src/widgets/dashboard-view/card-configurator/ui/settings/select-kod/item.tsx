import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'shared/styles';



interface Props {
  item?: {
    value? : string
    title? : string
  }
}

export const SelectKodItem: FC<Props> = memo(({ item }) => {
  return (
    <Tooltip title={item?.title}>
      <Box sx={f()}>
        <Typography sx={{ maxWidth: '100px' }}>{item?.value}</Typography>
        <Typography sx={{ maxWidth: '300px', ml: 1 }}>{item?.title}</Typography>
      </Box>
    </Tooltip>
  )
});
