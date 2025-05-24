import { addEntities } from 'entities/base';
import { ActivatedCompanyId } from 'entities/company';
import { LS } from 'shared/lib/local-storage';
import { StateSchemaDashboardView } from '../../slice/state-schema';



/** Returns initialState из данных сохранённых в LS by companyId */
export const getInitialState = (companyId: ActivatedCompanyId): StateSchemaDashboardView => {

  const initialState: StateSchemaDashboardView = {
    loading             : false,
    errors              : {},
    _isMounted          : true,

    editMode            : LS.getDashboardViewEditMode(companyId),
    newSelectedId       : '',
    selectedId          : '',
    light               : false,
    
    entities            : addEntities({}, LS.getDashboardView(companyId)) || {},
    newStoredViewItem   : undefined, // Начальные значения выбранного элемента
    prevStoredViewItem  : undefined, // Начальные значения предыдущего выбранного элемента

    activatedMovementId : '', // Активированный Id перемещаемого элемента
    activatedCopiedId   : '', // Активированный Id копируемого элемента
  };

  return initialState;
}
