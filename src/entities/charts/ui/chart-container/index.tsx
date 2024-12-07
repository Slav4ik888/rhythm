import { FC, ReactNode } from "react";
import { SxCard } from 'app/providers/theme';
import { Card } from '@mui/material';



interface Props {
  sx?      : SxCard
  children : ReactNode
}


/** Контейнер для задания размеров и фона для графика */
export const ChartContainer: FC<Props> = ({ sx, children }) => (
  <Card sx={sx?.root}>
    {
      children
    }
  </Card>
);
