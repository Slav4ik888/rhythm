import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { ChangeOneSettingsField, ChangeSelectedStyle, ChangeOneDatasetsItem, ChangeOneChartsItem } from '../../slice/types';
import { ActivatedCompanyId } from 'entities/company';
import { CardItem, CardItemId, ItemStyles, ItemStylesField, PartialCardItem } from '../../types';
import { addNewCard, deleteCard, DeleteCard, UpdateCardItem, updateCardItem as updateCardItemOnServer } from 'features/dashboard-view';
import { StateSchemaDashboardView } from '../../slice/state-schema';



interface Config {
  parentId? : CardItemId
  field?    : ItemStylesField
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
    cardItems           = useSelector(s.selectCardItems),
    parentsCardItems    = useSelector(s.selectParentsCardItems),
    updateCardItem      = (data: PartialCardItem) => dispatch(a.updateCardItem(data)),
    
    // Movement
    activatedMovementId = useSelector(s.selectActivatedMovementId),
    setActiveMovementId = () => dispatch(a.setActiveMovementId()),
    clearActivatedMovementId = () => dispatch(a.clearActivatedMovementId()),

    // Card
    selectedId          = useSelector(s.selectSelectedId),
    setSelectedId       = (id: CardItemId) => dispatch(a.setSelectedId(id)),
    selectedItem        = useSelector(s.selectSelectedItem),

    newStoredCard       = useSelector(s.selectNewStoredCard),
    prevStoredCard      = useSelector(s.selectPrevStoredCard),

    selectChildrenCardItems = s.makeSelectChildrenCardItems(parentId as CardItemId),
    childrenCardItems   = useSelector(selectChildrenCardItems),
    parentChildrenIds   = childrenCardItems.map(item => item.id),

    // Styles
    changeOneStyleField = (data: ChangeSelectedStyle) => dispatch(a.changeOneStyleField(data)),
    setSelectedStyles   = (data: ItemStyles) => dispatch(a.setSelectedStyles(data)),

    stylesByCardItemId  = useSelector(s.selectCardItemStyle),
    
    selectStyleByField  = s.makeSelectStyleByField(field as ItemStylesField),
    styleValueByField   = useSelector(selectStyleByField),
 
    // Settings
    changeOneSettingsField = (data: ChangeOneSettingsField) => dispatch(a.changeOneSettingsField(data)),
    changeOneChartsItem = (data: ChangeOneChartsItem) => dispatch(a.changeOneChartsItem(data)),
    // Изменение 1 field в settings.charts[index].datasets
    changeOneDatasetsItem = (data: ChangeOneDatasetsItem) => dispatch(a.changeOneDatasetsItem(data)),

    // Services
    serviceAddNewCard = (
      companyId   : ActivatedCompanyId,
      cardItem    : CardItem,
      // childrenIds : CardItemId[]
    ) => dispatch(addNewCard({ companyId, cardItem })),

    serviceUpdateCardItem = (data: UpdateCardItem) => dispatch(updateCardItemOnServer(data)),
    serviceDeleteCard     = (data: DeleteCard) => dispatch(deleteCard(data));

  
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
    cardItems,
    parentsCardItems,
    parentChildrenIds,
    updateCardItem,

    // Card
    selectedId,
    setSelectedId,
    selectedItem,
    newStoredCard,
    prevStoredCard,
    childrenCardItems,

    // Movement
    activatedMovementId,
    setActiveMovementId,
    clearActivatedMovementId,

    // Styles
    changeOneStyleField,
    setSelectedStyles,
    stylesByCardItemId,
    styleValueByField,

    // Settings
    changeOneSettingsField,
    changeOneChartsItem,
    changeOneDatasetsItem,

    // Services
    serviceAddNewCard,
    serviceUpdateCardItem,
    serviceDeleteCard,
  }
};
