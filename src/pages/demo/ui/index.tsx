import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f, pxToRem } from 'shared/styles';
import { LayoutInnerPage } from 'shared/ui/pages';
import { DEMO_PAGES } from '../model/constants';
import { DemoPageItem } from './demo-page';
import { useUIConfiguratorController, isDarkMode } from 'app/providers/theme';



const DemoPage: FC = memo(() => {
  const [configuratorState] = useUIConfiguratorController();
  const darkMode = isDarkMode(configuratorState.mode);


  return (
    <LayoutInnerPage type='demo' containerType='xl'>
      <Box sx={{ ...f('-c-c-w'), gap: pxToRem(16) }}>
        {
          DEMO_PAGES.map(item => (
            <DemoPageItem
              key      = {item.link}
              darkMode = {darkMode}
              item     = {item}
            />
          ))
        }
      </Box>
    </LayoutInnerPage>
  )
});

export default DemoPage;
