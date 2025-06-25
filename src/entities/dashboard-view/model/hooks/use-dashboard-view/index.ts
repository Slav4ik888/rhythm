import { useMemo } from 'react';
import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import {
  ChangeOneSettingsField, ChangeSelectedStyle, ChangeOneDatasetsItem, ChangeOneChartsItem,
  SetDashboardViewItems, SetEditMode
} from '../../slice/types';
import { ViewItemId, ViewItemStyles, PartialViewItem } from '../../types';
import {
  CreateGroupViewItems, createGroupViewItems, deleteViewItem,
  DeleteViewItem, UpdateViewItems, updateViewItems as updateViewItemsOnServer
} from 'features/dashboard-view';
import { ActivatedCopied, StateSchemaDashboardView } from '../../slice/state-schema';
import { getBunches, ReqGetBunches } from '../../services';



interface Config {
  parentId? : ViewItemId
}

export const useDashboardView = (config: Config = {}) => {
  const { parentId } = config;
  const dispatch = useAppDispatch();

  const loading                  = useSelector(s.selectLoading);
  const errors                   = useSelector(s.selectErrors);
  const isMounted                = useSelector(s.selectIsMounted);
  const editMode = useSelector(s.selectEditMode);
  const entities                 = useSelector(s.selectEntities);
  const viewItems                = useSelector(s.selectViewItems);
  // Убрал тк теперь это надо делать для каждого корневого в отдельности
  const parentsViewItems         = useSelector(s.selectParentsViewItems);
  const activatedMovementId      = useSelector(s.selectActivatedMovementId);
  const activatedCopied          = useSelector(s.selectActivatedCopied);
  const newSelectedId            = useSelector(s.selectNewSelectedId);
  const selectedId               = useSelector(s.selectSelectedId);
  const bright                   = useSelector(s.selectBright);
  const selectedItem             = useSelector(s.selectSelectedItem);
  const fromGlobalKod            = useSelector(s.selectFromGlobalKod);
  const globalKodParent          = useSelector(s.selectGlobalKodParent);

  const newStoredViewItem        = useSelector(s.selectNewStoredViewItem);
  const prevStoredViewItem       = useSelector(s.selectPrevStoredViewItem);

  const selectChildrenViewItems  = s.makeSelectChildrenViewItems(parentId as ViewItemId);
  const childrenViewItems        = useSelector(selectChildrenViewItems);
  const parentChildrenIds        = childrenViewItems.map(item => item.id);

  // Changes
  const isUnsaved                = useSelector(s.selectIsUnsaved);
  const changedViewItem          = useSelector(s.selectChangedViewItem); // Объект с изменившимися полями

  const api = useMemo(() => ({
    setErrors                : (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors              : () => dispatch(a.setErrors({})),

    setInitial               : (state: StateSchemaDashboardView) => dispatch(a.setInitial(state)),
    setIsMounted             : () => dispatch(a.setIsMounted()),
    serviceGetBunches        : (data: ReqGetBunches) => dispatch(getBunches(data)),
    setDashboardViewItems    : (data: SetDashboardViewItems) => dispatch(a.setDashboardViewItems(data)),
    setEditMode              : (data: SetEditMode) => dispatch(a.setEditMode(data)),
    updateViewItems          : (data: PartialViewItem[]) => dispatch(a.updateViewItems(data)),
    cancelUpdateViewItem     : () => dispatch(a.cancelUpdateViewItem()),

    // Movement
    setActiveMovementId      : () => dispatch(a.setActiveMovementId()),
    clearActivatedMovementId : () => dispatch(a.clearActivatedMovementId()),

    // Copying
    setActiveCopied          : (data: ActivatedCopied) => dispatch(a.setActiveCopied(data)),
    clearActivatedCopied     : () => dispatch(a.clearActivatedCopied()),

    // View
    setNewSelectedId         : (id: ViewItemId) => dispatch(a.setNewSelectedId(id)),
    setSelectedId            : (id: ViewItemId) => dispatch(a.setSelectedId(id)),
    setBright                : (status: boolean) => dispatch(a.setBright(status)),


    setIsUnsaved             : (status: boolean) => dispatch(a.setIsUnsaved(status)),

    // Styles
    changeOneStyleField      : (data: ChangeSelectedStyle) => dispatch(a.changeOneStyleField(data)),
    setSelectedStyles        : (data: ViewItemStyles) => dispatch(a.setSelectedStyles(data)),

    // Settings
    changeOneSettingsField   : (data: ChangeOneSettingsField) => dispatch(a.changeOneSettingsField(data)),
    changeOneChartsItem      : (data: ChangeOneChartsItem)    => dispatch(a.changeOneChartsItem(data)),
    // Изменение 1 field в settings.charts[index].datasets
    changeOneDatasetsItem    : (data: ChangeOneDatasetsItem)  => dispatch(a.changeOneDatasetsItem(data)),

    // Services
    serviceCreateGroupViewItems  : (data: CreateGroupViewItems) => dispatch(createGroupViewItems(data)),
    setDashboardBunchesFromCache : (companyId: string) => dispatch(a.setDashboardBunchesFromCache(companyId)),

    serviceUpdateViewItems : (data: UpdateViewItems) => dispatch(updateViewItemsOnServer(data)),
    serviceDeleteViewItem  : (data: DeleteViewItem) => dispatch(deleteViewItem(data)),

    // dev
    // devSeriviceCreateBunches: (companyId: string) => dispatch(createBunches({ companyId })),
  }),
    [dispatch]
  );


  return {
    loading,
    errors,
    isMounted,

    editMode,
    entities,
    viewItems,
    parentsViewItems,
    parentChildrenIds,

    // View
    newSelectedId,
    selectedId,
    selectedItem,
    bright,
    fromGlobalKod,
    globalKodParent,

    newStoredViewItem,
    prevStoredViewItem,
    childrenViewItems,

    // Changes
    isUnsaved,
    changedViewItem,

    // Movement
    activatedMovementId,

    // Copying
    activatedCopied,
    ...api
  }
};
