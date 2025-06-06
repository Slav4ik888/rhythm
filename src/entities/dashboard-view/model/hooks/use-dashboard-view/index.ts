import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { ChangeOneSettingsField, ChangeSelectedStyle, ChangeOneDatasetsItem, ChangeOneChartsItem, SetDashboardView, SetEditMode } from '../../slice/types';
import { ViewItem, ViewItemId, ViewItemStyles, PartialViewItem } from '../../types';
import { addNewViewItem, CreateGroupViewItems, createGroupViewItems, deleteViewItem, DeleteViewItem, UpdateViewItem, updateViewItem as updateViewItemOnServer } from 'features/dashboard-view';
import { ActivatedCopied, StateSchemaDashboardView } from '../../slice/state-schema';
import { CopyStylesItem, copyStylesViewItem } from 'features/dashboard-view/configurator';



interface Config {
  parentId? : ViewItemId
}

export const useDashboardView = (config: Config = {}) => {
  const
    { parentId } = config,
    dispatch = useAppDispatch(),

    loading                  = useSelector(s.selectLoading),
    errors                   = useSelector(s.selectErrors),
    setErrors                = (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors              = () => dispatch(a.setErrors({})),
    isMounted                = useSelector(s.selectIsMounted),

    setInitial               = (state: StateSchemaDashboardView) => dispatch(a.setInitial(state)),
    setDashboardView         = (data: SetDashboardView) => dispatch(a.setDashboardView(data)),
    editMode                 = useSelector(s.selectEditMode),
    setEditMode              = (data: SetEditMode) => dispatch(a.setEditMode(data)),
    entities                 = useSelector(s.selectEntities),
    viewItems                = useSelector(s.selectViewItems),
    parentsViewItems         = useSelector(s.selectParentsViewItems),
    updateViewItem           = (data: PartialViewItem) => dispatch(a.updateViewItem(data)),
    cancelUpdateViewItem     = () => dispatch(a.cancelUpdateViewItem()),

    // Movement
    activatedMovementId      = useSelector(s.selectActivatedMovementId),
    setActiveMovementId      = () => dispatch(a.setActiveMovementId()),
    clearActivatedMovementId = () => dispatch(a.clearActivatedMovementId()),

    // Copying
    activatedCopied          = useSelector(s.selectActivatedCopied),
    setActiveCopied          = (data: ActivatedCopied) => dispatch(a.setActiveCopied(data)),
    clearActivatedCopied     = () => dispatch(a.clearActivatedCopied()),

    // View
    newSelectedId            = useSelector(s.selectNewSelectedId),
    selectedId               = useSelector(s.selectSelectedId),
    setNewSelectedId         = (id: ViewItemId) => dispatch(a.setNewSelectedId(id)),
    setSelectedId            = (id: ViewItemId) => dispatch(a.setSelectedId(id)),
    bright                   = useSelector(s.selectBright),
    setBright                = (status: boolean) => dispatch(a.setBright(status)),

    selectedItem             = useSelector(s.selectSelectedItem),
    fromGlobalKod            = useSelector(s.selectFromGlobalKod),
    globalKodParent          = useSelector(s.selectGlobalKodParent),

    newStoredViewItem        = useSelector(s.selectNewStoredViewItem),
    prevStoredViewItem       = useSelector(s.selectPrevStoredViewItem),

    selectChildrenViewItems  = s.makeSelectChildrenViewItems(parentId as ViewItemId),
    childrenViewItems        = useSelector(selectChildrenViewItems),
    parentChildrenIds        = childrenViewItems.map(item => item.id),

    // Changes
    isUnsaved                = useSelector(s.selectIsUnsaved),
    setIsUnsaved             = (status: boolean) => dispatch(a.setIsUnsaved(status)),
    changedViewItem          = useSelector(s.selectChangedViewItem), // Объект с изменившимися полями

    // Styles
    changeOneStyleField      = (data: ChangeSelectedStyle) => dispatch(a.changeOneStyleField(data)),
    setSelectedStyles        = (data: ViewItemStyles) => dispatch(a.setSelectedStyles(data)),
 
    // Settings
    changeOneSettingsField   = (data: ChangeOneSettingsField) => dispatch(a.changeOneSettingsField(data)),
    changeOneChartsItem      = (data: ChangeOneChartsItem)    => dispatch(a.changeOneChartsItem(data)),
    // Изменение 1 field в settings.charts[index].datasets
    changeOneDatasetsItem    = (data: ChangeOneDatasetsItem)  => dispatch(a.changeOneDatasetsItem(data)),

    // Services
    serviceAddNewViewItem = (
      companyId   : string,
      viewItem    : ViewItem,
    ) => dispatch(addNewViewItem({ companyId, viewItem })),
    serviceCreateGroupViewItems = (data: CreateGroupViewItems) => dispatch(createGroupViewItems(data)),

    serviceUpdateViewItem = (data: UpdateViewItem) => dispatch(updateViewItemOnServer(data)),
    serviceCopyStyles     = (data: CopyStylesItem) => dispatch(copyStylesViewItem(data)),
    serviceDeleteViewItem = (data: DeleteViewItem) => dispatch(deleteViewItem(data));

  
  return {
    loading,
    errors,
    setErrors,
    clearErrors,
    isMounted,

    setInitial,
    setDashboardView,
    editMode,
    setEditMode,
    entities,
    viewItems,
    parentsViewItems,
    parentChildrenIds,
    updateViewItem,
    cancelUpdateViewItem,

    // View
    newSelectedId,
    setNewSelectedId,
    selectedId,
    setSelectedId,
    selectedItem,
    bright,
    setBright,
    fromGlobalKod,
    globalKodParent,
    
    newStoredViewItem,
    prevStoredViewItem,
    childrenViewItems,

    // Changes
    isUnsaved,
    setIsUnsaved,
    changedViewItem,

    // Movement
    activatedMovementId,
    setActiveMovementId,
    clearActivatedMovementId,

    // Copying
    activatedCopied,
    setActiveCopied,
    clearActivatedCopied,

    // Styles
    changeOneStyleField,
    setSelectedStyles,

    // Settings
    changeOneSettingsField,
    changeOneChartsItem,
    changeOneDatasetsItem,

    // Services
    serviceAddNewViewItem,
    serviceCreateGroupViewItems,
    serviceUpdateViewItem,
    serviceCopyStyles,
    serviceDeleteViewItem,
  }
};
