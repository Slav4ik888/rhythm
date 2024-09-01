import { FC, memo } from "react";
import Card from "@mui/material/Card";
import MDBox from "shared/ui/mui-design-components/md-box";
import { pxToRem } from 'app/providers/theme';



interface Props {
  children: React.ReactNode
}


export const DashboardReportContainer: FC<Props> = memo(({ children }) => {

  return (
    <Card sx={{ height: "100%", maxWidth: pxToRem(300), mr: 3 }}>
      <MDBox padding="1rem">
        {children}
      </MDBox>
    </Card>
  );
});
