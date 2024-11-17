import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { ReportsLineChartConfig } from '../config-type';
import { MDDivider } from 'shared/ui/mui-design-components';



interface Props {
  title  : string
  config : ReportsLineChartConfig
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
        minHeight     : config.header?.minHeight,
      }}
    >
      {title}
    </MDTypography>

    <MDDivider />
  </>
));
