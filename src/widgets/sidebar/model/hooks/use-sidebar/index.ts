import { useAppDispatch, usePages } from 'shared/lib/hooks';
// import { Errors } from 'shared/lib/validators';
import { useMemo } from 'react';
import { ColorName, useUIConfiguratorController } from 'app/providers/theme';
import { useCompany } from 'entities/company';
import { getDefaultSidebarRoutes } from './get-default-items';
import { getPathBySheetId } from '../../../lib';



export const useSidebar = () => {
  const dispatch = useAppDispatch();
  const [configuratorState] = useUIConfiguratorController();
  const { mode } = configuratorState;
  const darkMode = mode === 'dark';
  const { dashboardSheetId: activeSheetId = 'main' } = usePages();
  const { paramsSheets, paramsCompanyId } = useCompany();

  const textColor: ColorName = useMemo(() => {
    if (! darkMode) return 'dark';
    if (darkMode) return 'inherit';
    return 'white' as ColorName
  }, [darkMode]);


  const sidebarRoutes = useMemo(() => [
    ...getDefaultSidebarRoutes(paramsCompanyId),
    ...Object.values(paramsSheets).map(sheet => ({
      ...sheet,
      route: getPathBySheetId(paramsCompanyId, sheet.route)
    })),
  ].sort((a, b) => a.order - b.order),
    [paramsSheets, paramsCompanyId]
  );


  // const api = useMemo(() => ({
  //   setErrors         : (errors: Errors) => dispatch(actions.setErrors(errors)),
  //   setErrorStatus    : (status: number) => dispatch(actions.setErrorStatus({ status })),
  // }),
  //   [dispatch]
  // );


  return {
    sidebarRoutes,
    activeSheetId,
    textColor,

    // ...api
  }
};
