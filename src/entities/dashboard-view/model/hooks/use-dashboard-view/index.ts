import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { SetSelectedStyles, ChangeSelectedStyle } from '../../slice/types';
import { ActivatedCompanyId } from 'entities/company';
import { CardItem, CardItemId, ItemStylesField, PartialCardItem } from '../../types';
import { addNewCard, deleteCard, DeleteCard, UpdateCardItem, updateCardItem as updateCardItemOnServer } from 'features/dashboard-view';
import { StateSchema } from 'app/providers/store';
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

    selectedId          = useSelector(s.selectSelectedId),
    setSelectedId       = (id: CardItemId) => dispatch(a.setSelectedId(id)),
    selectedItem        = useSelector(s.selectSelectedItem),
    isChanges           = useSelector(s.selectIsChanges),

    newStoredCard       = useSelector(s.selectNewStoredCard),
    prevStoredCard      = useSelector(s.selectPrevStoredCard),

    
    childrenCardItems   = useSelector((state: StateSchema) => s.selectChildrenCardItems(state, parentId as CardItemId)),
    parentChildrenIds   = childrenCardItems.map(item => item.id),

    changeOneStyleField = (data: ChangeSelectedStyle) => dispatch(a.changeOneStyleField(data)),
    setSelectedStyles   = (data: SetSelectedStyles) => dispatch(a.setSelectedStyles(data)),

    stylesByCardItemId  = useSelector(s.selectCardItemStyle),
    styleValueByField   = useSelector((state: StateSchema) => s.selectStyleByField(state, field as ItemStylesField)),
    
    activatedMovementId      = useSelector(s.selectActivatedMovementId),
    setActiveMovementId      = () => dispatch(a.setActiveMovementId()),
    clearActivatedMovementId = () => dispatch(a.clearActivatedMovementId()),

    updateCardItem      = (data: PartialCardItem) => dispatch(a.updateCardItem(data)),

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

    selectedId,
    setSelectedId,
    selectedItem,
    isChanges,
    newStoredCard,
    prevStoredCard,
    childrenCardItems,

    
    changeOneStyleField,
    setSelectedStyles,

    stylesByCardItemId,
    styleValueByField,
    

    activatedMovementId,
    setActiveMovementId,
    clearActivatedMovementId,

    updateCardItem,
    
    serviceAddNewCard,
    serviceUpdateCardItem,
    serviceDeleteCard,
  }
};
