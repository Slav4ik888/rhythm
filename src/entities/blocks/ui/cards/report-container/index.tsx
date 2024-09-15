import { FC, memo, ReactNode } from "react";
import Card from "@mui/material/Card";
import { pxToRem } from 'app/providers/theme';



interface Props {
  children: ReactNode
}


export const DashboardReportContainer: FC<Props> = memo(({ children }) => {

  return (
    <Card sx={{ height: "100%", minWidth: pxToRem(400), maxWidth: pxToRem(400), mr: 3, p: "1rem" }}>
      {children}
    </Card>
  );
});
