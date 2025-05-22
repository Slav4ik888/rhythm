import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { f, pxToRem } from 'shared/styles';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { useDashboardData } from 'entities/dashboard-data';



const useStyles = () => ({
  root: {
    ...f(),
  },
  kod: {
    width    : pxToRem(100),
    maxWidth : pxToRem(100),
  },
  chip: {
    width    : pxToRem(70),
    maxWidth : pxToRem(70),
  },
  title: {
    maxWidth : pxToRem(300),
    ml       : 1,
  },
});


interface Props {
  item?: {
    value? : string
    title? : string
  }
}

export const SelectKodItem: FC<Props> = memo(({ item }) => {
  const sx = useStyles();
  const { itemByKod } = useDashboardData({ kod: item?.value });

  return (
    <Tooltip title={item?.title}>
      <Box sx={sx.root}>
        <Typography sx={sx.kod}>{item?.value}</Typography>
        <StatisticPeriodTypeChip type={itemByKod?.periodType} sx={{ root: sx.chip }} />
        <Typography sx={sx.title}>{item?.title}</Typography>
      </Box>
    </Tooltip>
  )
});
