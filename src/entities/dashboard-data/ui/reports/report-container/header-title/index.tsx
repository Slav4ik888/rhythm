import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { ReportsBaseConfig } from '../../reports-line-chart/types';
import { MDDivider } from 'shared/ui/mui-design-components';
import { Box } from '@mui/material';
import { pxToRem, f } from 'shared/styles';
import { CopyToClipboard } from '../../copy-kod';



interface Props {
  title   : string
  kod     : string
  config? : ReportsBaseConfig
}


export const ReportsHeaderTitle: FC<Props> = memo(({ title, kod, config }) => (
  <>
    <Box sx={{ ...f(), pl: pxToRem(8) }}>
      <MDTypography
        variant = 'h6'
        color   = 'reportsChartTitle'
        sx      = {{
          textAlign     : 'center',
          textTransform : 'none',
          minHeight     : config?.header?.minHeight,
          width         : '100%',
          mb            : 2,
        }}
      >
        {title}
      </MDTypography>
      <CopyToClipboard kod={kod} />
    </Box>

    <MDDivider />
  </>
));
