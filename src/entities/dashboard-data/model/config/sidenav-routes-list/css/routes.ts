export enum CSS_Routes {
  DEPARTMENT_7 = 'DEPARTMENT_7',
  DEPARTMENT_1 = 'DEPARTMENT_1',
  DEPARTMENT_2 = 'DEPARTMENT_2',
  DEPARTMENT_3 = 'DEPARTMENT_3',
  DEPARTMENT_4 = 'DEPARTMENT_4',
  DEPARTMENT_5 = 'DEPARTMENT_5',
  DEPARTMENT_6 = 'DEPARTMENT_6',
}

export const CSS_SubRouteName: Record<string, string> = {
  [CSS_Routes.DEPARTMENT_7]: 'department-7',
  [CSS_Routes.DEPARTMENT_1]: 'department-1',
  [CSS_Routes.DEPARTMENT_2]: 'department-2',
  [CSS_Routes.DEPARTMENT_3]: 'department-3',
  [CSS_Routes.DEPARTMENT_4]: 'department-4',
  [CSS_Routes.DEPARTMENT_5]: 'department-5',
  [CSS_Routes.DEPARTMENT_6]: 'department-6',
}

export const CSS_SubRoutePath: Record<CSS_Routes, string> = {
  [CSS_Routes.DEPARTMENT_7]: '/department-7',
  [CSS_Routes.DEPARTMENT_1]: '/department-1',
  [CSS_Routes.DEPARTMENT_2]: '/department-2',
  [CSS_Routes.DEPARTMENT_3]: '/department-3',
  [CSS_Routes.DEPARTMENT_4]: '/department-4',
  [CSS_Routes.DEPARTMENT_5]: '/department-5',
  [CSS_Routes.DEPARTMENT_6]: '/department-6',
};
