import { FC, memo, useEffect } from 'react';
import { useUser } from 'entities/user';
import { Outlet, useParams } from 'react-router-dom';
import { useCompany } from 'entities/company';
import { __devLog } from 'shared/lib/tests/__dev-log';



const CompanyPage: FC = memo((): JSX.Element | null => {
  const { companyId: paramsCompanyId } = useParams();
  const { auth } = useUser();
  const { companyId, _isParamsCompanyIdLoaded, serviceGetParamsCompany } = useCompany();


  useEffect(() => {
    if (auth && ! _isParamsCompanyIdLoaded && paramsCompanyId && paramsCompanyId !== companyId) {
      serviceGetParamsCompany(paramsCompanyId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, _isParamsCompanyIdLoaded, paramsCompanyId, companyId]);


  if (! auth || ! _isParamsCompanyIdLoaded) return null;

  return (
    <Outlet />
  );
});


export default CompanyPage;
