import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import {  } from '../../types';
import { StateSchemaDashboard } from '../../slice/state-schema';
import { ChangeSelectedStyle, SetActivePeriod, SetSelectedPeriod, SetSelectedStyle } from '../../slice/types';
import { getData } from 'features/dashboard';
import { ActivatedCompanyId, Company } from 'entities/company';
import { CardItem, CardItemId, ItemStylesField } from 'entities/card-item';
import { addNewCard } from 'features/dashboard/add-new-card';
import { StateSchema } from 'app/providers/store';



interface Config {
  cardItemId? : CardItemId
  field?      : ItemStylesField
}

export const useDashboard = (config: Config = {}) => {
  const
    { cardItemId, field } = config,
    dispatch = useAppDispatch(),

    loading             = useSelector(s.selectLoading),
    errors              = useSelector(s.selectErrors),
    setErrors           = (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors         = () => dispatch(a.setErrors({})),
    isMounted           = useSelector(s.selectIsMounted),

    // VIEW
    editMode            = useSelector(s.selectEditMode),
    setEditMode         = (editMode: boolean) => dispatch(a.setEditMode(editMode)),
    selectedId          = useSelector(s.selectElectedId),
    setSelectedId       = (id: CardItemId) => dispatch(a.setSelectedId(id)),
    
    serviceAddNewCard   = (companyId: ActivatedCompanyId, cardItem: CardItem) => dispatch(addNewCard({ companyId, cardItem })),
    viewEntities        = useSelector(s.selectViewEntitiesEntities),
    cardItems           = useSelector(s.selectCardItems),
    parentsCardItems    = useSelector(s.selectParentsCardItems),
    changeSelectedStyle = (data: ChangeSelectedStyle) => dispatch(a.changeSelectedStyle(data)),
    setSelectedStyle    = (data: SetSelectedStyle) => dispatch(a.setSelectedStyle(data)),
    stylesByCardItemId  = useSelector((state: StateSchema) => s.selectCardItemStyle(state, cardItemId as CardItemId)),
    styleValueByField   = useSelector((state: StateSchema) => s.selectStyleByField(state, cardItemId as CardItemId, field as ItemStylesField)),
    
    // DATA
    setInitial          = (state: StateSchemaDashboard) => dispatch(a.setInitial(state)),
    startEntities       = useSelector(s.selectStartEntities),
    // getStartEntity      = (kod: string) => startEntities[kod],
    startDates          = useSelector(s.selectStartDates),

    activeEntities      = useSelector(s.selectActiveEntities),
    // getActiveEntity     = (kod: string) => activeEntities[kod],
    activeDates         = useSelector(s.selectActiveDates),

    lastUpdated         = useSelector(s.selectLastUpdated),

    activePeriod        = useSelector(s.selectActivePeriod),
    activePeriodType    = activePeriod?.type,
    activeDateStart     = activePeriod?.start,
    activeDateEnd       = activePeriod?.end,
    setActivePeriod     = (data: SetActivePeriod) => dispatch(a.setActivePeriod(data)),
    
    selectedPeriod      = useSelector(s.selectSelectedPeriod),
    selectedPeriodType  = selectedPeriod?.type,
    selectedDateStart   = selectedPeriod?.start,
    selectedDateEnd     = selectedPeriod?.end,
    setSelectedPeriod   = (data: SetSelectedPeriod) => dispatch(a.setSelectedPeriod(data)),

    serviceGetData      = (company: Company) => dispatch(getData(company));

  
  return {
    loading,
    errors,
    setErrors,
    clearErrors,
    isMounted,

    // View
    editMode,
    setEditMode,
    viewEntities,
    cardItems,
    parentsCardItems,
    serviceAddNewCard,
    changeSelectedStyle, 
    setSelectedStyle,
    stylesByCardItemId,
    styleValueByField,
    selectedId,
    setSelectedId,

    // Data
    setInitial,
    startEntities,
    startDates,
    
    activeEntities,
    activeDates,

    lastUpdated,

    activePeriod,
    activePeriodType,
    activeDateStart,
    activeDateEnd,
    setActivePeriod,

    selectedPeriod,
    selectedPeriodType,
    selectedDateStart,
    selectedDateEnd,
    setSelectedPeriod,

    serviceGetData,
  }
};
