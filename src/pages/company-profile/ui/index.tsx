import { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { CompanyProfilePageComponent } from './component';
import { useUI } from 'entities/ui';
import { useGroup } from 'shared/lib/hooks';
import { Company, creatorCompany, PartialCompany, useCompany } from 'entities/company';
import { useFeaturesCompany } from 'features/company/update-company/model/hooks/use-features-company';
import { getChanges, isEmpty } from 'shared/helpers/objects';
import { creatorFixDate } from 'entities/base';
import { __devLog } from 'shared/lib/tests/__dev-log';



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
    C.setGroup(companyState, { isChanges: false });
  }, [auth, C, companyState, setErrorStatus]);


  const handleSubmit = useCallback(async () => {
    if (loading) return;

    const data = await C.getGroup();

    const updatedData: PartialCompany = {
      ...getChanges(companyState, data),
      id         : companyState.id,
      lastChange : creatorFixDate(userId)
    };

    __devLog('updatedData: ', updatedData);
    if (isEmpty(updatedData)) return;

    // TODO: validate
    // const { valid, errors } = validateCompanyData(updatedData);
    // valid ? serviceUpdateCompany(updatedData) : setErrors(errors);
    serviceUpdateCompany(updatedData);
    C.setIsChanges(false);
  }, [loading, userId, C, companyState, serviceUpdateCompany]);


  const handleCancel = useCallback(async () => {
    C.setGroup(companyState, { isChanges: false });
  }, [C, companyState]);


  // if (! auth) return;

  return (
    <CompanyProfilePageComponent
      group    = {C}
      auth     = {auth}
      loading  = {loading}
      errors   = {errors}
      onCancel = {handleCancel}
      onSubmit = {handleSubmit}
    />
  );
});


export default CompanyProfilePage;
