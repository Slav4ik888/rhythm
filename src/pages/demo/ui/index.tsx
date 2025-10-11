import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import { LayoutInnerPage } from 'shared/ui/pages';
import { DEMO_PAGES } from '../model/constants';
import { DemoPageItem } from './demo-page';
import { useUI } from 'entities/ui';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks';
import { LS } from 'shared/lib/local-storage';
import { isValidPartnerCode } from 'entities/parthner';



const DemoPage: FC = memo(() => {
  const { darkMode } = useUI();
  const { pathname } = useLocation(); // https://rhy.thm.su/demo/?ref=5994014
  console.log('pathname: ', pathname); // pathname:  /demo/

  const [searchParams] = useSearchParams();
  const partnerId = searchParams.get('ref');
  console.log('partnerId: ', partnerId); // ref:  5973512

  useInitialEffect(() => {
    // Сохранение ref в LS
    if (partnerId) {
      const lsPartnerId = LS.getPartnerId();

      if (! lsPartnerId && isValidPartnerCode(partnerId)) { // Если нет сохранённого Id другой когда
        LS.setPartnerId(partnerId);
        serviceIncreasePartnerFollowed(partnerId); // Увеличиваем счётчик партнёра
      }
    }
  });



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
