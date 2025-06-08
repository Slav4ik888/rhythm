export enum CSSRoutes {
  DEPARTMENT_7 = 'DEPARTMENT_7',
  DEPARTMENT_1 = 'DEPARTMENT_1',
  DEPARTMENT_2 = 'DEPARTMENT_2',
  DEPARTMENT_3 = 'DEPARTMENT_3',
  DEPARTMENT_4 = 'DEPARTMENT_4',
  DEPARTMENT_5 = 'DEPARTMENT_5',
  DEPARTMENT_6 = 'DEPARTMENT_6',
}

export const CSSSubRouteName: Record<string, string> = {
  [CSSRoutes.DEPARTMENT_7]: 'department-7',
  [CSSRoutes.DEPARTMENT_1]: 'department-1',
  [CSSRoutes.DEPARTMENT_2]: 'department-2',
  [CSSRoutes.DEPARTMENT_3]: 'department-3',
  [CSSRoutes.DEPARTMENT_4]: 'department-4',
  [CSSRoutes.DEPARTMENT_5]: 'department-5',
  [CSSRoutes.DEPARTMENT_6]: 'department-6',
}

export const CSSSubRoutePath: Record<CSSRoutes, string> = {
  [CSSRoutes.DEPARTMENT_7]: '/department-7',
  [CSSRoutes.DEPARTMENT_1]: '/department-1',
  [CSSRoutes.DEPARTMENT_2]: '/department-2',
  [CSSRoutes.DEPARTMENT_3]: '/department-3',
  [CSSRoutes.DEPARTMENT_4]: '/department-4',
  [CSSRoutes.DEPARTMENT_5]: '/department-5',
  [CSSRoutes.DEPARTMENT_6]: '/department-6',
};
