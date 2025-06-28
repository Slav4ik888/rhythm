import { LS } from 'shared/lib/local-storage';
import { StateSchemaDashboardTemplates } from '../../slice/state-schema';



/** Returns initialState из данных сохранённых в LS by companyId */
export const getInitialState = (): StateSchemaDashboardTemplates => {
  const initialState: StateSchemaDashboardTemplates = {
    loading               : false,
    errors                : {},
    _isMounted            : true,

    selectedId            : '',
    opened                : false,
    entities              : LS.getDashboardTemplatesEntities(),
  };

  return initialState;
}
