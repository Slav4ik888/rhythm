import { FC, memo } from 'react';
import { ViewItemType } from 'entities/dashboard-view/model/types';
import { blue, deepOrange, teal } from '@mui/material/colors';
import { AddBtn } from './add-btn';



interface Props {
  onClick: (type: ViewItemType) => void
}

/** Row with chart elements btns */
export const AddViewItemElementBtns: FC<Props> = memo(({ onClick }) => (
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
  ));
