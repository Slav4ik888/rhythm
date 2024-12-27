import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { SetSelectedStyles, ChangeSelectedStyle } from '../../slice/types';
import { ActivatedCompanyId } from 'entities/company';
import { CardItem, CardItemId, ItemStylesField } from '../../types';
import { addNewCard, deleteCard, DeleteCard, UpdateChangedStyles, updateChangedStyles } from 'features/dashboard-view';
import { StateSchema } from 'app/providers/store';
import { StateSchemaDashboardView } from '../../slice/state-schema';



interface Config {
  cardItemId? : CardItemId
  parentId?   : CardItemId
  field?      : ItemStylesField
}

export const useDashboardView = (config: Config = {}) => {
  const
    { cardItemId, field, parentId } = config,
    dispatch = useAppDispatch(),

    loading             = useSelector(s.selectLoading),
    errors              = useSelector(s.selectErrors),
    setErrors           = (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors         = () => dispatch(a.setErrors({})),
    isMounted           = useSelector(s.selectIsMounted),

    setInitial          = (state: StateSchemaDashboardView) => dispatch(a.setInitial(state)),
    editMode            = useSelector(s.selectEditMode),
    setEditMode         = (editMode: boolean) => dispatch(a.setEditMode(editMode)),
    selectedId          = useSelector(s.selectSelectedId),
    
    setSelectedId       = (id: CardItemId) => dispatch(a.setSelectedId(id)),
    storedStyles        = useSelector(s.selectStoredStyles),
    selectedItem        = useSelector(s.selectSelectedItem),
    
    serviceAddNewCard = (
      companyId   : ActivatedCompanyId,
      cardItem    : CardItem,
      childrenIds : CardItemId[]
    ) => dispatch(addNewCard({ companyId, cardItem, childrenIds })),

    entities            = useSelector(s.selectEntities),
    cardItems           = useSelector(s.selectCardItems),
    parentsCardItems    = useSelector(s.selectParentsCardItems),
    childrenCardItems   = useSelector((state: StateSchema) => s.selectChildrenCardItems(state, parentId as CardItemId)),
    parentChildrenIds   = childrenCardItems.map(item => item.id),

    changeOneStyleField = (data: ChangeSelectedStyle) => dispatch(a.changeOneStyleField(data)),
    // serviceChangeSelectedStyle = (data: ChangeSelectedStyle) => dispatch(changeSelectedStyle(data)),
    setSelectedStyles   = (data: SetSelectedStyles) => dispatch(a.setSelectedStyles(data)),
    // serviceSetSelectedStyles   = (data: SetSelectedStyles) => dispatch(setSelectedStyles(data)),
    serviceUpdateChangedStyles = (data: UpdateChangedStyles) => dispatch(updateChangedStyles(data)),

    stylesByCardItemId  = useSelector((state: StateSchema) => s.selectCardItemStyle(state, cardItemId as CardItemId)),
    styleValueByField   = useSelector((state: StateSchema) => s.selectStyleByField(state, cardItemId as CardItemId, field as ItemStylesField)),
    
    serviceDeleteCard   = (data: DeleteCard) => dispatch(deleteCard(data));

  
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
    childrenCardItems,
    serviceAddNewCard,
    changeOneStyleField,
    setSelectedStyles,
    // serviceChangeSelectedStyle,
    // serviceSetSelectedStyles,
    serviceUpdateChangedStyles,

    stylesByCardItemId,
    styleValueByField,
    selectedId,
    setSelectedId,
    storedStyles,
    selectedItem,
    
    serviceDeleteCard,
  }
};
