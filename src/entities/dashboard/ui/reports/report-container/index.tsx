import { FC, memo, ReactNode } from 'react';
import { Card } from '@mui/material';
import { pxToRem, SxCard } from 'app/providers/theme';
import { f } from 'app/styles';
import { ReportsHeaderTitle } from './header-title';
import { ReportsBaseConfig } from '../reports-line-chart/types';



interface Props {
  title?   : string
  config?  : ReportsBaseConfig
  children : ReactNode
  sx?      : SxCard
}


export const DashboardReportContainer: FC<Props> = memo(({ children, config, sx, title }) => {

  return (
    <Card
      sx={{
        ...f,
        flexDirection : 'column',
        height        : '100%',
        minWidth      : pxToRem(440),
        maxWidth      : sx?.root?.width ? sx?.root?.width : pxToRem(440),
        mr            : 3,
        mb            : 3,
        p             : pxToRem(24),
        ...sx?.root
      }}
    >
      {
        title && <ReportsHeaderTitle title={title} config={config} />
      }
      {
        children
      }
    </Card>
  );
});