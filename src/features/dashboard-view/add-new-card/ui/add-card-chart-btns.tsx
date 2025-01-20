import { FC, memo } from 'react';
import { CardItemType } from 'entities/dashboard-view/model/types';
import { blueGrey, green, grey } from '@mui/material/colors';
import { AddBtn } from './add-btn';



interface Props {
  onClick: (type: CardItemType) => void
}

/** Row with card elements btns */
export const AddCardChartBtns: FC<Props> = memo(({ onClick }) => {
  return (
    <>
      <AddBtn
        type    = 'chart'
        color   = {grey[900]}
        onClick = {onClick}
      />
      <AddBtn
        type    = 'chip'
        color   = {blueGrey[500]}
        onClick = {onClick}
      />
      <AddBtn
        type    = 'growthIcon'
        color   = {green[700]}
        onClick = {onClick}
      />
    </>
  )
});
