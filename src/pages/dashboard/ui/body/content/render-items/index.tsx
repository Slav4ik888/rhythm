import { FC, memo } from 'react';
import { DashboardBodyContentItem } from '../content-item';
import { CardItemId } from 'entities/card-item';
import { ParentsCardItems } from 'entities/dashboard';



interface Props {
  parentsCardItems : ParentsCardItems
  parentId         : CardItemId // Current Rendered ParentId
}


export const DashboardBodyContentRender: FC<Props> = memo(({ parentsCardItems, parentId }) => {
  console.log('DashboardBodyContentRender parentId:', parentId);


  return (
    <>
      {
        parentsCardItems[parentId].map(item => <DashboardBodyContentItem
          key              = {item.id}
          parentsCardItems = {parentsCardItems}
          item             = {item}
        />)
      }
    </>
  )
});
