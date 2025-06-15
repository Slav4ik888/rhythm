import { FC, memo, useCallback, useEffect, useState, ChangeEvent } from 'react';
import { User, useUser, creatorUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'app/providers/routes';
import { UserProfilePageComponent } from './component';
import { useUI } from 'entities/ui';
import { cloneObj, getChanges, isEmpty, setValueByScheme } from 'shared/helpers/objects';
import { useFeaturesUser } from 'features/user';
import { creatorFixDate } from 'entities/base';
import { __devLog } from 'shared/lib/tests/__dev-log';



const UserProfilePage: FC = memo(() => {
  const { loading, auth, errors, user: storedUser } = useUser();
  const { serviceUpdateUser } = useFeaturesUser();
  const [formData, setFormData] = useState(creatorUser(storedUser));
  const { setErrorStatus, setReplacePath } = useUI();
  const navigate = useNavigate();


  useEffect(() => {
    if (! auth) {
      navigate(RoutePath[AppRoutes.LOGIN]);
      setReplacePath(RoutePath[AppRoutes.USER_PROFILE]);
    }

    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
    setFormData(storedUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, storedUser]);

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

    const updatedData: Partial<User> = getChanges(storedUser, formData);

    updatedData.id = storedUser.id;
    updatedData.companyId = storedUser.companyId;
    updatedData.lastChange = creatorFixDate(storedUser.id);

    __devLog('updatedData: ', updatedData);
    if (isEmpty(updatedData)) return;

    // TODO: validate
    // const { valid, errors } = validateUserData(updatedData);
    // valid ? serviceUpdateUser(updatedData) : setErrors(errors);
    serviceUpdateUser(updatedData);
  }, [storedUser, formData, loading, serviceUpdateUser]);


  const handleCancel = useCallback(async () => {
    setFormData(storedUser);
  }, [storedUser]);


  if (! auth) return null;

  return (
    <UserProfilePageComponent
      isChanges = {Boolean(Object.keys(getChanges(storedUser, formData)).length)}
      formData  = {formData}
      loading   = {loading}
      errors    = {errors}
      onCancel  = {handleCancel}
      onChange  = {handleChange}
      onSubmit  = {handleSubmit}
    />
  );
});


export default UserProfilePage;
