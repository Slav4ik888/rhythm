import { FC, memo, ReactNode } from 'react';
import { Card } from '@mui/material';
import { pxToRem, SxCard } from 'app/providers/theme';
import { f } from 'app/styles';
import { ReportsHeaderTitle } from './header-title';
import { ReportsBaseConfig } from '../reports-line-chart/types';



interface Props {
  kod      : string
  title?   : string
  config?  : ReportsBaseConfig
  children : ReactNode
  sx?      : SxCard
}


export const DashboardReportContainer: FC<Props> = memo(({ children, config, sx, title, kod }) => {

  return (
    <Card
      sx={{
        ...f('c'),
        minWidth : pxToRem(440),
        maxWidth : sx?.root?.width ? sx?.root?.width : pxToRem(440),
        // mr       : 3,
        // mb       : 3,
        p        : pxToRem(24),
        ...sx?.root
      }}
    >
      {
        title && <ReportsHeaderTitle
          title  = {title}
          kod    = {kod}
          config = {config}
        />
      }
      {
        children
      }
    </Card>
  );
});
