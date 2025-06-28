import { ViewItemId } from 'entities/dashboard-view';
import { Errors } from 'shared/lib/validators';
import { Template } from '../types';



export interface DashboardTemplatesEntities {
  [viewItemId: ViewItemId]: Template
}


// STATE
export interface StateSchemaDashboardTemplates {
  loading    : boolean
  errors     : Errors
  _isMounted : boolean    // Признак того, что Reducer mounted

  entities   : DashboardTemplatesEntities
  opened     : boolean    // Открыто ли окошко с шаблонами

  selectedId : ViewItemId // Id выбранного элемента (при editMode === true)
}
