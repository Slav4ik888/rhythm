import { ItemBase } from 'entities/base';
import { ViewItem, ViewItemId, ViewItemType } from '../../../dashboard-view';



export interface Template extends ItemBase {
  id        : ViewItemId // Начальный ViewItem от которого строиться всё дерево === id (templateId)
  type      : ViewItemType

  viewItems : Record<ViewItemId, ViewItem>
}
