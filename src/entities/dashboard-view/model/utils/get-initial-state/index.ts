import { ActivatedCompanyId } from 'entities/company';
import { LS } from 'shared/lib/local-storage';
import { StateSchemaDashboardView } from '../../slice/state-schema';



/** Returns initialState из данных сохранённых в LS by companyId */
export const getInitialState = (companyId: ActivatedCompanyId): StateSchemaDashboardView => {

  const initialState: StateSchemaDashboardView = {
    loading             : false,
    errors              : {},
    _isMounted          : true,

    editMode            : false,
    selectedId          : '',
    entities            : LS.getDashboardView(companyId) || {},
    newStoredCard       : {}, // Начальные значения выбранного элемента
    prevStoredCard      : {}, // Начальные значения предыдущего выбранного элемента
    activatedMovementId : '', // Активированный Id перемещаемого элемента
  };

  return initialState;
}
