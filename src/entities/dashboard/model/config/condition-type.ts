import { DashboardItemType } from '../types';


export enum DashboardConditionType {
  POWER         = 'power',
  ABUNDANCE     = 'abundance',
  NORMAL        = 'normal',
  EMERGENCY     = 'emergency',
  DANGER        = 'danger',
  NON_EXISTENCE = 'non_existence',
  NULL          = 'null',
  ANY           = 'any',
}


// Могущество | Изобилие  | Нормальная деятельность | Чрезвычайное положение  | Опасность | Несуществование
// Power      | Abundance | Normal Activity         | State of Emergency      | Danger    | Non-Existence
export const CONDITION_TYPE: Record<DashboardConditionType, DashboardItemType> = {
  [DashboardConditionType.POWER]: {
    label       : 'Могущество',
    description : 'Состояние могущества',
  },
  [DashboardConditionType.ABUNDANCE]: {
    label       : 'Изобилие',
    description : 'Состояние изобилия',
  },
  [DashboardConditionType.NORMAL]: {
    label       : 'Норма',
    description : 'Состояние нормальной деятельности',
  },
  [DashboardConditionType.EMERGENCY]: {
    label       : 'ЧП',
    description : 'Состояние чрезвычайного положения',
  },
  [DashboardConditionType.DANGER]: {
    label       : 'Опасность',
    description : 'Состояние опасности',
  },
  [DashboardConditionType.NON_EXISTENCE]: {
    label       : 'Несущ',
    description : 'Состояние несуществования',
  },
  [DashboardConditionType.NULL]: {
    label       : '-',
    description : 'Состояние не назначено',
  },
  [DashboardConditionType.ANY]: {
    label       : 'Error',
    description : 'Невалидное обозначение состояния',
  },
}
