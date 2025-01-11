import { Errors } from 'shared/lib/validators';
import { CardItem, CardItemId } from '../types';



export interface DashboardViewEntities {
  [cardItemId: CardItemId]: CardItem
}


// STATE
export interface StateSchemaDashboardView {
  loading             : boolean
  errors              : Errors
  _isMounted          : boolean // Признак того, что Reducer mounted

  editMode            : boolean // Режим редактирования
  entities            : DashboardViewEntities
  selectedId          : CardItemId    // Id выбранного элемента (при editMode === true)
  // Начальные значения выбранного элемента, чтобы затем перевести его в статус prevStoredCard
  // само по себе используется только в UnsavedChanges, а также для промежуточного хранения
  newStoredCard       : CardItem | {}
  // Начальные значения предыдущего выбранного элемента, которое можно сравнивать для сохранения изменений
  // Используется при смене selectedId
  prevStoredCard      : CardItem | {}
  // Активированный Id перемещаемого элемента
  activatedMovementId : CardItemId
}
