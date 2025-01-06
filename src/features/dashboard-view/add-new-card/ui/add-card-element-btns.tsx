import { FC, memo } from 'react';
import { CardItemType } from 'entities/dashboard-view/model/types';
import { blue, deepOrange, teal } from '@mui/material/colors';
import { AddBtn } from './add-btn';



interface Props {
  onClick: (type: CardItemType) => void
}

/** Row with chart elements btns */
export const AddCardElementBtns: FC<Props> = memo(({ onClick }) => {
  return (
    <>
      <AddBtn
        type    = 'box'
        color   = {blue[900]}
        onClick = {onClick}
      />
      <AddBtn
        type    = 'text'
        color   = {deepOrange[600]}
        onClick = {onClick}
      />
      <AddBtn
        type    = 'divider'
        color   = {teal[900]}
        onClick = {onClick}
      />
    </>
  )
});
