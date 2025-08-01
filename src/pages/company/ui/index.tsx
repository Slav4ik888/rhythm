import { FC, memo, useEffect } from 'react';
import { useUser } from 'entities/user';
import { Outlet, useParams } from 'react-router-dom';
import { useCompany } from 'entities/company';
import { useUI } from 'entities/ui';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { usePages } from 'shared/lib/hooks';



const CompanyPage: FC = memo((): JSX.Element | null => {
  const { companyId: paramsCompanyId } = useParams();
  const { _isLoaded, loading: loadingUser, auth } = useUser();
  const { setPageLoading, setWarningMessage } = useUI();
  const { dashboardSheetId } = usePages();
  const {
    loading: loadingCompany, companyId, dashboardPublicAccess, _isParamsCompanyIdLoaded,
    serviceGetParamsCompany, setIsParamsCompanyIdLoaded
  } = useCompany({ dashboardSheetId });

  useEffect(() => {
    if (! auth
      && ! _isLoaded
      && !loadingUser
    ) {
      setPageLoading({
        'get-auth': { text: 'Авторизация...', name: 'CompanyPage' }
      });
    }
    // Если по ссылке вошли в чужую компанию
    else if (
      // auth && // должна быть возможность входить неавторизованным пользователям
      _isLoaded
      && ! loadingUser
      && ! loadingCompany
      && ! _isParamsCompanyIdLoaded
      && paramsCompanyId
      && paramsCompanyId !== companyId
    ) {
      setPageLoading({ 'get-params-company': { text: 'Загрузка данных по компании...', name: 'CompanyPage' } });
      serviceGetParamsCompany({ companyId: paramsCompanyId, dashboardSheetId });
    }
    // Если по ссылке вошли в свою компанию
    else if (auth
      && !_isParamsCompanyIdLoaded
      && paramsCompanyId === companyId
    ) {
      setIsParamsCompanyIdLoaded(true);
    }
    else if (! auth
      && _isLoaded
      && _isParamsCompanyIdLoaded
      && ! dashboardPublicAccess
    ) {
      __devLog('NOT AUTHORIZED & NOT ACCESS');
      setWarningMessage('Необходимо авторизоваться');
    }
  },
    [
      loadingUser, _isLoaded, loadingCompany, auth, dashboardSheetId, dashboardPublicAccess,
      _isParamsCompanyIdLoaded, paramsCompanyId, companyId, setWarningMessage, serviceGetParamsCompany,
      setIsParamsCompanyIdLoaded, setPageLoading
    ]
  );

  if (
    (! auth && ! dashboardPublicAccess) // должна быть возможность входить неавторизованным пользователям
    || ! _isParamsCompanyIdLoaded
  ) {
    return null;
  }

  return (
    <Outlet />
  );
});


export default CompanyPage;
