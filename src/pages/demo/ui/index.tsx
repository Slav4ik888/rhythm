/* eslint-disable max-len */
import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import { LayoutInnerPage } from 'shared/ui/pages';
import { DEMO_PAGES } from '../model/constants';
import { DemoPageItem } from './demo-page';
import { useUI } from 'entities/ui';
import { usePartner } from 'entities/parthner';
import { Helmet } from 'react-helmet-async';



const DemoPage: FC = memo(() => {
  const { darkMode } = useUI();
  const { partnerIdParams } = usePartner(); // Запускаем процесс определения и обработки партнёрской ссылки


  return (
    <LayoutInnerPage type='demo' containerType='xl'>
      <Helmet>
        <title>Информационная панель руководителя «Ритм»</title>
        <meta property='og:title' content='Информационная панель руководителя «Ритм»' />
        <meta property='og:description' content='Демо-примеры информационных панелей. Дизайн и функционал по Вашим требованиям!' />
        <meta property='og:image' content='https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/rhythm%2Fbase%2FПанель-демо1.jpg?alt=media&token=ca96b751-a7c9-4ddb-b664-4e0b0db167d1' />
        <meta property='og:url' content='https://rhy.thm.su/demo' />
        <meta property='og:type' content='website' />
      </Helmet>
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
