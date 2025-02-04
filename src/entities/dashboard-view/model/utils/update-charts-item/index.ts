import { ViewItem, ViewItemCharts, ViewItemChartsField } from 'entities/dashboard-view';


export const updateChartsItem = (
  item        : ViewItem,
  index       : number,
  fieldItem   : ViewItemChartsField,
  updatedItem : any
): ViewItemCharts[] => {
  
  const oldCharts = item.settings?.charts || [];

  return [
    ...oldCharts.slice(0, index),
    { ...oldCharts[index], [fieldItem]: updatedItem },
    ...oldCharts.slice(index + 1)
  ];
}
