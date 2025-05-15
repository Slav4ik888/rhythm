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
  // Id выбранного элемента (на время пока loading === true),
  // чтобы если при сохранении будет ошибка, то можно было это уладить до переключения на следующий элемент
  // После loading === false, должно произойти selectedId = newSelectedId
  newSelectedId       : ViewItemId
  selectedId          : ViewItemId // Id выбранного элемента (при editMode === true)
  // Начальные значения выбранного элемента, чтобы затем перевести его в статус prevStoredView
  // само по себе используется только в UnsavedChanges, а также для промежуточного хранения
  newStoredViewItem   : ViewItem | undefined
  // Начальные значения предыдущего выбранного элемента, которое можно сравнивать для сохранения изменений
  // Используется при смене selectedId
  prevStoredViewItem  : ViewItem | undefined

  // Активированный Id перемещаемого элемента
  activatedMovementId : ViewItemId
  // Активированный Id копируемого элемента
  activatedCopiedId   : ViewItemId
}
