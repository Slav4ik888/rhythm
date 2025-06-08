import { addEntities } from 'entities/base';
import { LS } from 'shared/lib/local-storage';
import { StateSchemaDashboardView } from '../../slice/state-schema';



/** Returns initialState из данных сохранённых в LS by companyId */
export const getInitialState = (companyId: string): StateSchemaDashboardView => {
  const initialState: StateSchemaDashboardView = {
    loading               : false,
    errors                : {},
    _isMounted            : true,

    editMode              : LS.getDashboardViewEditMode(companyId),
    newSelectedId         : '',
    selectedId            : '',
    bright                : false,
    isUnsaved             : false, // Наличие не сохраненных изменений (в тч customSettings in Company)

    entities              : addEntities({}, LS.getDashboardView(companyId) || []),
    newStoredViewItem     : undefined, // Начальные значения выбранного элемента
    prevStoredViewItem    : undefined, // Начальные значения предыдущего выбранного элемента

    activatedMovementId   : '', // Активированный Id перемещаемого элемента
    activatedCopied       : undefined, // Активированный Id копируемого элемента
  };

  return initialState;
}
