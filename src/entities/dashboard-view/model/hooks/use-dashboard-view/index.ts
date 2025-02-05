import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { ChangeOneSettingsField, ChangeSelectedStyle, ChangeOneDatasetsItem, ChangeOneChartsItem } from '../../slice/types';
import { ActivatedCompanyId } from 'entities/company';
import { ViewItem, ViewItemId, ViewItemStyles, ViewItemStylesField, PartialViewItem } from '../../types';
import { addNewViewItem, deleteViewItem, DeleteViewItem, UpdateViewItem, updateViewItem as updateViewItemOnServer } from 'features/dashboard-view';
import { StateSchemaDashboardView } from '../../slice/state-schema';



interface Config {
  parentId? : ViewItemId
  field?    : ViewItemStylesField
}

export const useDashboardView = (config: Config = {}) => {
  const
    { field, parentId } = config,
    dispatch = useAppDispatch(),

    loading             = useSelector(s.selectLoading),
    errors              = useSelector(s.selectErrors),
    setErrors           = (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors         = () => dispatch(a.setErrors({})),
    isMounted           = useSelector(s.selectIsMounted),

    setInitial          = (state: StateSchemaDashboardView) => dispatch(a.setInitial(state)),
    editMode            = useSelector(s.selectEditMode),
    setEditMode         = (editMode: boolean) => dispatch(a.setEditMode(editMode)),
    entities            = useSelector(s.selectEntities),
    viewItems           = useSelector(s.selectViewItems),
    parentsViewItems    = useSelector(s.selectParentsViewItems),
    updateViewItem      = (data: PartialViewItem) => dispatch(a.updateViewItem(data)),
    
    // Movement
    activatedMovementId = useSelector(s.selectActivatedMovementId),
    setActiveMovementId = () => dispatch(a.setActiveMovementId()),
    clearActivatedMovementId = () => dispatch(a.clearActivatedMovementId()),

    // Copying
    activatedCopiedId = useSelector(s.selectActivatedMovementId),
    setActiveCopiedId = () => dispatch(a.setActiveCopiedId()),
    clearActivatedCopiedId = () => dispatch(a.clearActivatedCopiedId()),

    // View
    selectedId          = useSelector(s.selectSelectedId),
    setSelectedId       = (id: ViewItemId) => dispatch(a.setSelectedId(id)),
    selectedItem        = useSelector(s.selectSelectedItem),

    newStoredViewItem       = useSelector(s.selectNewStoredViewItem),
    prevStoredViewItem      = useSelector(s.selectPrevStoredViewItem),
    updateNewStoredViewItem = (data: PartialViewItem) => dispatch(a.updateNewStoredViewItem(data)),

    selectChildrenViewItems = s.makeSelectChildrenViewItems(parentId as ViewItemId),
    childrenViewItems   = useSelector(selectChildrenViewItems),
    parentChildrenIds   = childrenViewItems.map(item => item.id),

    // Styles
    changeOneStyleField = (data: ChangeSelectedStyle) => dispatch(a.changeOneStyleField(data)),
    setSelectedStyles   = (data: ViewItemStyles) => dispatch(a.setSelectedStyles(data)),

    stylesByViewItemId  = useSelector(s.selectViewItemStyle),
    
    selectStyleByField  = s.makeSelectStyleByField(field as ViewItemStylesField),
    styleValueByField   = useSelector(selectStyleByField),
 
    // Settings
    changeOneSettingsField = (data: ChangeOneSettingsField) => dispatch(a.changeOneSettingsField(data)),
    changeOneChartsItem = (data: ChangeOneChartsItem) => dispatch(a.changeOneChartsItem(data)),
    // Изменение 1 field в settings.charts[index].datasets
    changeOneDatasetsItem = (data: ChangeOneDatasetsItem) => dispatch(a.changeOneDatasetsItem(data)),

    // Services
    serviceAddNewViewItem = (
      companyId   : ActivatedCompanyId,
      viewItem    : ViewItem,
      // childrenIds : ViewItemId[]
    ) => dispatch(addNewViewItem({ companyId, viewItem })),

    serviceUpdateViewItem = (data: UpdateViewItem) => dispatch(updateViewItemOnServer(data)),
    serviceDeleteViewItem     = (data: DeleteViewItem) => dispatch(deleteViewItem(data));

  
  return {
    loading,
    errors,
    setErrors,
    clearErrors,
    isMounted,

    setInitial,
    editMode,
    setEditMode,
    entities,
    viewItems,
    parentsViewItems,
    parentChildrenIds,
    updateViewItem,

    // View
    selectedId,
    setSelectedId,
    selectedItem,
    newStoredViewItem,
    prevStoredViewItem,
    updateNewStoredViewItem,
    childrenViewItems,

    // Movement
    activatedMovementId,
    setActiveMovementId,
    clearActivatedMovementId,

    // Copying
    activatedCopiedId,
    setActiveCopiedId,
    clearActivatedCopiedId,

    // Styles
    changeOneStyleField,
    setSelectedStyles,
    stylesByViewItemId,
    styleValueByField,

    // Settings
    changeOneSettingsField,
    changeOneChartsItem,
    changeOneDatasetsItem,

    // Services
    serviceAddNewViewItem,
    serviceUpdateViewItem,
    serviceDeleteViewItem,
  }
};
