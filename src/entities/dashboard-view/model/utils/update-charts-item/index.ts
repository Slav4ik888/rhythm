import { CardItem, CardItemCharts, CardItemChartsField } from 'entities/dashboard-view';


export const updateChartsItem = (
  item        : CardItem,
  index       : number,
  fieldItem   : CardItemChartsField,
  updatedItem : any
): CardItemCharts[] => {
  
  const oldCharts = item.settings?.charts || [];

  return [
    ...oldCharts.slice(0, index),
    { ...oldCharts[index], [fieldItem]: updatedItem },
    ...oldCharts.slice(index + 1)
  ];
}
