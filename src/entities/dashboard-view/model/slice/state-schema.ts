import { Errors } from 'shared/lib/validators';
import { CardItem, CardItemId } from '../types';



export interface DashboardViewEntities {
  [cardItemId: CardItemId]: CardItem
}


// STATE
export interface StateSchemaDashboardView {
  loading     : boolean
  errors      : Errors
  _isMounted  : boolean // Признак того, что Reducer mounted

  editMode    : boolean // Режим редактирования
  entities    : DashboardViewEntities
  selectedId  : CardItemId // Id выбранного элемента (при editMode === true)
}
