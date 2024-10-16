import { FC, memo, ReactNode } from "react";
import Card from "@mui/material/Card";
import { pxToRem } from 'app/providers/theme';



interface Props {
  children: ReactNode
}


export const DashboardReportContainer: FC<Props> = memo(({ children }) => {

  return (
    <Card
      sx={{
        height   : "100%",
        minWidth : pxToRem(440),
        maxWidth : pxToRem(440),
        mr       : 3,
        p        : pxToRem(16),
      }}
    >
      {children}
    </Card>
  );
});
