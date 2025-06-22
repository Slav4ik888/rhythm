import { FC, memo, useEffect } from 'react';
import { useUser } from 'entities/user';
import { Outlet, useParams } from 'react-router-dom';
import { useCompany } from 'entities/company';
import { useUI } from 'entities/ui';
import { __devLog } from 'shared/lib/tests/__dev-log';



const CompanyPage: FC = memo((): JSX.Element | null => {
  // __devLog('CompanyPage');
  const { companyId: paramsCompanyId } = useParams();
  const { auth } = useUser();
  const { pageText, setPageText } = useUI();
  const { companyId, _isParamsCompanyIdLoaded, serviceGetParamsCompany, setIsParamsCompanyIdLoaded } = useCompany();


  useEffect(() => {
    if (! auth && ! pageText) setPageText('Авторизация...');
    // Если по ссылке вошли в чужую компанию
    if (auth && ! _isParamsCompanyIdLoaded && paramsCompanyId && paramsCompanyId !== companyId) {
      setPageText('Загрузка данных по компании...');
      serviceGetParamsCompany(paramsCompanyId);
    }
    // Если по ссылке вошли в свою компанию
    else if (auth && ! _isParamsCompanyIdLoaded && paramsCompanyId === companyId) setIsParamsCompanyIdLoaded(true);

    if (auth && _isParamsCompanyIdLoaded) setPageText();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, pageText, _isParamsCompanyIdLoaded, paramsCompanyId, companyId]);


  if (! auth || ! _isParamsCompanyIdLoaded) return null;

  return (
    <Outlet />
  );
});


export default CompanyPage;
