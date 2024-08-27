import { FC, memo, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks';
import { useUI } from 'entities/ui';
import { CssBaseline, Box } from '@mui/material';
import { PageLoader } from 'widgets';
import { isNoEmptyFields, getAllObjValue } from 'shared/helpers/objects';
import { useTheme, CustomTheme } from 'app/providers/theme';
// import { Navbar } from 'widgets/navbar';
import { MessageBar } from 'widgets/message-bar';
import { ScrollToTop } from 'shared/ui/pages';
import { useSelector } from 'react-redux';



const useStyles = (theme: CustomTheme) => ({
  wrapper: {
    position        : 'relative',
    display         : 'flex',
    flexDirection   : 'column',
    height          : '100%',
    minHeight       : '100vh',
    fontFamily      : '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    color           : theme.body.color,
    backgroundColor : theme.body.background
  },
  main: {
    display         : 'flex',
    flexGrow        : 1,
    // justifyContent  : screenFormats?.isDesktop ? 'center' : 'flex-start',
    // height          : 'calc(100vh - 65px)',
    minHeight       : 'calc(100vh - 4.6875rem)'
  }
});


export const Layout: FC = memo(() => {
  const
    sx = useStyles(useTheme()),
    { pageLoading, errors, setWarningMessage } = useUI(),
    dispatch = useAppDispatch(),
    state = useSelector(state => state);
  
  
  // Global show errors
  useEffect(() => {
    isNoEmptyFields(errors) && dispatch(setWarningMessage((getAllObjValue(errors))));
  }, [errors]);
 

  return (
    <>
      <CssBaseline />
      <ScrollToTop />
      <Box sx={sx.wrapper}>
        {/* <Navbar /> */}
        <MessageBar />
        <PageLoader loading={pageLoading} />
        
        <Box component="main" sx={sx.main}>
          <Outlet />
        </Box>

        {/* <Footer /> */}
      </Box>
    </>
  )
});
