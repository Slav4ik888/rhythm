import { FC } from 'react';
import MDBox from "shared/ui/mui-design-components/md-box";


interface Props {
  children: React.ReactNode
}

export const DashboardBodyWrapper: FC<Props> = ({ children }) => {

  return (
    <MDBox py={3} height='100%' minHeight='calc(100vh - 300px)'>
      {children}
    </MDBox>
  );
}
