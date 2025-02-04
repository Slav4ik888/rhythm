import { FC, memo } from 'react';
import { ViewItemType } from 'entities/dashboard-view/model/types';
import { blueGrey, green, grey, lightBlue } from '@mui/material/colors';
import { AddBtn } from './add-btn';



interface Props {
  onClick: (type: ViewItemType) => void
}

/** Row with view elements btns */
export const AddViewItemIndicatorsBtns: FC<Props> = memo(({ onClick }) => {
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
      <AddBtn
        type    = 'digitIndicator'
        color   = {lightBlue[600]}
        onClick = {onClick}
      />
    </>
  )
});
