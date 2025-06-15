import { FC, memo, useCallback, useEffect, useState, ChangeEvent } from 'react';
import { useUser } from 'entities/user';
import { CompanyProfilePageComponent } from './component';
import { useUI } from 'entities/ui';
import { PartialCompany, useCompany, Company } from 'entities/company';
import { useFeaturesCompany } from 'features/company/update-company/model/hooks/use-features-company';
import { cloneObj, getChanges, isEmpty, setValueByScheme } from 'shared/helpers/objects';
import { creatorFixDate } from 'entities/base';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { AppRoutes, RoutePath } from 'app/providers/routes';
import { useNavigate } from 'react-router-dom';



const CompanyProfilePage: FC = memo(() => {
  const { auth, userId } = useUser();
  const { loading, errors, paramsCompany: storedCompany } = useCompany();
  const [formData, setFormData] = useState<Partial<Company>>(storedCompany);
  const { serviceUpdateCompany } = useFeaturesCompany();
  const { setErrorStatus, setReplacePath } = useUI();
  const navigate = useNavigate();

  useEffect(() => {
    if (! auth) {
      navigate(RoutePath[AppRoutes.LOGIN]);
      setReplacePath(RoutePath[AppRoutes.COMPANY_PROFILE]);
    }
    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
    setFormData(storedCompany);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, storedCompany]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>, scheme: string) => {
    const { value } = e.target;

    setFormData(prev => {
      const obj = cloneObj(prev);
      setValueByScheme(obj, scheme, value);
      return obj;
    });
    // Простая валидация на лету (можно расширить)
    // validateField(field, value);
  };


  const handleSubmit = useCallback(async () => {
    if (loading) return;

    const updatedData: PartialCompany = {
      ...getChanges(storedCompany, formData),
      id         : storedCompany.id,
      lastChange : creatorFixDate(userId)
    };

    __devLog('updatedData: ', updatedData);
    if (isEmpty(updatedData)) return;


    // TODO: validate
    // const { valid, errors } = validateCompanyData(updatedData);
    // valid ? serviceUpdateCompany(updatedData) : setErrors(errors);
    serviceUpdateCompany(updatedData);
  }, [loading, userId, formData, storedCompany, serviceUpdateCompany]);


  const handleCancel = useCallback(async () => {
    setFormData(storedCompany);
  }, [storedCompany]);


  if (! auth) return null;

  return (
    <CompanyProfilePageComponent
      isChanges = {Boolean(Object.keys(getChanges(storedCompany, formData)).length)}
      formData  = {formData}
      loading   = {loading}
      errors    = {errors}
      onCancel  = {handleCancel}
      onChange  = {handleChange}
      onSubmit  = {handleSubmit}
    />
  );
});


export default CompanyProfilePage;
