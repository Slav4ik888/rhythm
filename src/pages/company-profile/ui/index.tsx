import { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { CompanyProfilePageComponent } from './component';
import { useUI } from 'entities/ui';
import { useGroup } from 'shared/lib/hooks';
import { Company, creatorCompany, useCompany } from 'entities/company';
import { useFeaturesCompany } from 'features/company/model/hooks/use-features-company';
import { getChanges, isEmpty } from 'shared/helpers/objects';
import { creatorFixDate } from 'entities/base';



const CompanyProfilePage: FC = memo(() => {
  const { auth, userId } = useUser();
  const { loading, errors, company: companyState } = useCompany();
  const { serviceUpdateCompany } = useFeaturesCompany();
  const { setErrorStatus } = useUI();
  const C = useGroup<Company>(creatorCompany());
  const navigate = useNavigate();

  
  useEffect(() => {
    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
    C.setGroup(companyState);
  }, []);
  

  const handleSubmit = useCallback(async () => {
    if (loading) return;

    const data = await C.getGroup();

    const updatedData: Partial<Company> = getChanges(companyState, data);;

    updatedData.id = companyState.id;
    updatedData.lastChange = creatorFixDate(userId);

    // if (companyState.companyName !== data.companyName) {
    //   companyData.companyName = data.companyName;
    // }
    // if (companyState.googleData?.url !== data.googleData?.url) {
    //   companyData.googleData = { ...data.googleData };
    // }
    
    console.log('updatedData: ', updatedData);
    if (isEmpty(updatedData)) return;

    // TODO: validate
    // const { valid, errors } = validateCompanyData(updatedData);
    // valid ? serviceUpdateCompany(updatedData) : setErrors(errors);
    serviceUpdateCompany(updatedData);
  }, [C.group, companyState]);
  

  const handleCancel = useCallback(async () => {

  }, [C.group, companyState]);


  if (! auth) navigate(RoutePath.LOGIN);

  return (
    <CompanyProfilePageComponent 
      group    = {C}
      loading  = {loading}
      errors   = {errors}
      onCancel = {handleCancel}
      onSubmit = {handleSubmit}
    />
  );
});


export default CompanyProfilePage;
