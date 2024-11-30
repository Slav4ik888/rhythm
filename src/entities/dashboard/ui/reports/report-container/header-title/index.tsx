import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { ReportsBaseConfig } from '../../reports-line-chart/types';
import { MDDivider } from 'shared/ui/mui-design-components';



interface Props {
  title   : string
  config? : ReportsBaseConfig
}


export const ReportsHeaderTitle: FC<Props> = memo(({ title, config }) => (
  <>
    <MDTypography
      variant = 'h6'
      color   = 'reportsChartTitle'
      sx      = {{
        textAlign     : 'center',
        textTransform : 'none',
        mb            : 2,
        minHeight     : config?.header?.minHeight,
      }}
    >
      {title}
    </MDTypography>

    <MDDivider />
  </>
));
