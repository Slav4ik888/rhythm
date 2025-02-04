import { Errors } from 'shared/lib/validators';
import { ViewItem, ViewItemId } from '../types';



export interface DashboardViewEntities {
  [viewItemId: ViewItemId]: ViewItem
}


// STATE
export interface StateSchemaDashboardView {
  loading             : boolean
  errors              : Errors
  _isMounted          : boolean // Признак того, что Reducer mounted

  editMode            : boolean // Режим редактирования
  entities            : DashboardViewEntities
  selectedId          : ViewItemId    // Id выбранного элемента (при editMode === true)
  // Начальные значения выбранного элемента, чтобы затем перевести его в статус prevStoredView
  // само по себе используется только в UnsavedChanges, а также для промежуточного хранения
  newStoredViewItem   : ViewItem | {}
  // Начальные значения предыдущего выбранного элемента, которое можно сравнивать для сохранения изменений
  // Используется при смене selectedId
  prevStoredViewItem  : ViewItem | {}
  // Активированный Id перемещаемого элемента
  activatedMovementId : ViewItemId
}
