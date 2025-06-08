import { User } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks';
import { serviceUpdateUser as updateUser } from '../../services';


// interface Config {
// }

export const useFeaturesUser = () => {
  // export const useFeaturesUser = (config: Config = {}) => {
  // const { } = config;
  const dispatch = useAppDispatch();

  const serviceUpdateUser = (user: Partial<User>) => dispatch(updateUser(user));

  return {
    serviceUpdateUser,
  }
};
