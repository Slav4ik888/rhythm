import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import { LayoutInnerPage } from 'shared/ui/pages';
import { DEMO_PAGES } from '../model/constants';
import { DemoPageItem } from './demo-page';
import { useUI } from 'entities/ui';



const DemoPage: FC = memo(() => {
  const { darkMode } = useUI();

  return (
    <LayoutInnerPage type='demo' containerType='xl'>
      <Box sx={(theme) => ({
        ...f('-c-sa-w'),
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          gap : 6,
          p   : 1,
        }
      })}>
        {
          DEMO_PAGES.map(item => (
            <DemoPageItem
              key      = {item.route}
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
