import { useMemo } from 'react';
import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { StateSchemaDashboardTemplates } from '../../slice/state-schema';
import { ViewItemId } from 'entities/dashboard-view';
import { getBunchesUpdated, getTemplates } from '../../services';
import { SetOpened } from '../../slice/types';
import { Template } from '../../types';
import { updateTemplate, UpdateTemplate } from 'shared/api/features/dashboard-templates';
import { ReqGetTemplates } from '../../services/get-templates';



export const useDashboardTemplates = () => {
  const dispatch = useAppDispatch();

  const loading          = useSelector(s.selectLoading);
  const errors           = useSelector(s.selectErrors);
  const isMounted        = useSelector(s.selectIsMounted);
  const bunchesUpdated   = useSelector(s.selectBunchesUpdated);
  const entities         = useSelector(s.selectEntities);
  const templates        = useSelector(s.selectTemplates);

  const opened           = useSelector(s.selectOpened);
  const selectedId       = useSelector(s.selectSelectedId);
  const selectedTemplate = useSelector(s.selectSelectedTemplate);


  const api = useMemo(() => ({
    setErrors                : (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors              : () => dispatch(a.setErrors({})),

    setInitial               : (state: StateSchemaDashboardTemplates) => dispatch(a.setInitial(state)),
    setIsMounted             : () => dispatch(a.setIsMounted()),
    setOpened                : (data: SetOpened) => dispatch(a.setOpened(data)),
    setSelectedId            : (id: ViewItemId) => dispatch(a.setSelectedId(id)),
    serviceGetBunchesUpdated : () => dispatch(getBunchesUpdated()),
    serviceGetTemplates      : (data: ReqGetTemplates) => dispatch(getTemplates(data)),
    serviceUpdateTemplate    : (data: UpdateTemplate) => dispatch(updateTemplate(data)),
  }),
    [dispatch]
  );


  return {
    loading,
    errors,
    isMounted,
    bunchesUpdated,

    entities,
    templates,

    opened,
    selectedId,
    selectedTemplate,

    ...api
  }
};
