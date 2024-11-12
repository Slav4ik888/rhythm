import { FC, memo, useCallback, useEffect } from 'react';
import { User, useUser, creatorUser } from 'entities/user';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { UserProfilePageComponent } from './component';
import { useUI } from 'entities/ui';
import { useGroup } from 'shared/lib/hooks';
import { getChanges, isEmpty } from 'shared/helpers/objects';
import { useFeaturesUser } from 'features/user';



const UserProfilePage: FC = memo(() => {
  const { loading, auth, errors, user: userState } = useUser();
  const { serviceUpdateUser } = useFeaturesUser();
  const { setErrorStatus } = useUI();
  const U = useGroup<User>(creatorUser());
  const navigate = useNavigate();

  
  useEffect(() => {
    // Обнулить если была записана ошибка, например 401, 403...
    setErrorStatus(0);
    U.setGroup(userState);
  }, []);
  

  const handleSubmit = useCallback(async () => {
    if (loading) return;

    const data = await U.getGroup();

    const updatedData: Partial<User> = getChanges(userState, data);

    console.log('updatedData: ', updatedData);
    if (isEmpty(updatedData)) return;

    // TODO: validate
    // const { valid, errors } = validateUserData(updatedData);
    // valid ? serviceUpdateUser(updatedData) : setErrors(errors);
    serviceUpdateUser(updatedData);
  }, [U.group, userState]);
  

  if (! auth) navigate(RoutePath.LOGIN);

  return (
    <UserProfilePageComponent 
      group    = {U}
      loading  = {loading}
      errors   = {errors}
      onSubmit = {handleSubmit}
    />
  );
});


export default UserProfilePage;
