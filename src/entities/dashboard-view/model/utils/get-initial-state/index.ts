import { updateEntities } from 'entities/base';
import { LS } from 'shared/lib/local-storage';
import { StateSchemaDashboardView } from '../../slice/state-schema';
import { organizeViewItemsIntoEntities } from '../organize-vi-into-entities';



/** Returns initialState из данных сохранённых в LS by companyId */
export const getInitialState = (companyId: string): StateSchemaDashboardView => {
  const initialState: StateSchemaDashboardView = {
    loading               : false,
    errors                : {},
    _isMounted            : true,

    editMode              : LS.getDashboardViewEditMode(companyId) || false,
    newSelectedId         : '',
    selectedId            : '',
    bright                : false,
    isUnsaved             : false, // Наличие не сохраненных изменений (в тч customSettings in Company)

    entities              : organizeViewItemsIntoEntities(LS.getDashboardViewItems(companyId) || []),
    viewItems             : LS.getDashboardViewItems(companyId) || [],

    newStoredViewItem     : undefined, // Начальные значения выбранного элемента
    prevStoredViewItem    : undefined, // Начальные значения предыдущего выбранного элемента

    activatedMovementId   : '', // Активированный Id перемещаемого элемента
    activatedCopied       : undefined, // Активированный Id копируемого элемента
  };

  return initialState;
}
