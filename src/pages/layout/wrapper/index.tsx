import { FC, memo, ReactNode } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';



interface Props {
  children: ReactNode
}

export const LayoutWrapper: FC<Props> = memo(({ children }) => {

  return (
    <MDBox
      sx={{
        display         : 'flex',
        flexDirection   : 'column',
        justifyContent  : 'space-between',
        height          : '100%',
        minHeight       : '100vh',
        fontFamily      : '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      }}
    >
      {children}
    </MDBox>
  )
});