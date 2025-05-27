import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { f, pxToRem } from 'shared/styles';
import { StatisticPeriodTypeChip } from 'entities/statistic-type';
import { useDashboardData } from 'entities/dashboard-data';
import { CompanyTypeChip } from 'entities/company-type';
import { useCompany } from 'entities/company';



const useStyles = () => ({
  root: {
    ...f(),
    gap: 1,
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
    // ml       : 1,
  },
  company: {

  }
});


interface Props {
  item?: {
    value? : string
    title? : string
  }
}

/** Компонент для  */
export const SelectKodItem: FC<Props> = memo(({ item }) => {
  const sx = useStyles();
  const { customSettings } = useCompany();
  const { itemByKod } = useDashboardData({ kod: item?.value });

  return (
    <Tooltip title={item?.title}>
      <Box sx={sx.root}>
        <Typography sx={sx.kod}>{item?.value}</Typography>

        <CompanyTypeChip
          type           = {itemByKod?.companyType}
          customSettings = {customSettings}
          sx             = {{ root: sx.chip }}
        />
        <StatisticPeriodTypeChip
          type = {itemByKod?.periodType}
          sx   = {{ root: sx.chip }}
        />
        <Typography sx={sx.title}>{item?.title}</Typography>
      </Box>
    </Tooltip>
  )
});
