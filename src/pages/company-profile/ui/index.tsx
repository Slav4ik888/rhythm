import { FC, memo, useEffect, useRef } from 'react';
import { useUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { CompanyProfilePageComponent } from './component';
import { useUI } from 'entities/ui';
import { useGroup } from 'shared/lib/hooks';
import { CompanyData, creatorCompany, useCompany } from 'entities/company';



const CompanyProfilePage: FC = memo(() => {
  const { auth } = useUser();
  const { companyData } = useCompany();
  const { setErrorStatus } = useUI();
  const C = useGroup<CompanyData>(creatorCompany());
  const navigate = useNavigate();

  
  useEffect(() => {
    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
    C.setGroup(companyData);
  }, []);
  

  if (! auth) navigate(RoutePath.LOGIN);

  return (
    <CompanyProfilePageComponent 
      group    = {C}
      // passwordRef = {passwordRef}
      // errors      = {errors}
      // onSubmit    = {handlerSubmit}
    />
  );
});


export default CompanyProfilePage;
