import { DashboardItemType } from '../types';



export enum DashboardConditionType {
  POWER         = 'power',
  ABUNDANCE     = 'abundance',
  NORMAL        = 'normal',
  EMERGENCY     = 'emergency',
  DANGER        = 'danger',
  NON_EXISTENCE = 'non_existence',
  NULL          = 'null',
}


/** Вместо пришедшего состояния из таблицы, возвращает DashboardConditionType */
export const getConditionType = (condition?: string): DashboardConditionType => {
  switch (condition) {
    case 'Могущество' : return DashboardConditionType.POWER;
    case 'Изобилие'   : return DashboardConditionType.ABUNDANCE;
    case 'Норма'      : return DashboardConditionType.NORMAL;
    case 'ЧП'         : return DashboardConditionType.EMERGENCY;
    case 'Опасность'  : return DashboardConditionType.DANGER;
    case 'Несущ'      : return DashboardConditionType.NON_EXISTENCE;

    default: return DashboardConditionType.NON_EXISTENCE;
  }
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
    label       : 'Error',
    description : 'Невалидное обозначение состояния',
  },
}

// export const arrayDashboardConditionType = Array.from(Object.values(DashboardConditionType));
