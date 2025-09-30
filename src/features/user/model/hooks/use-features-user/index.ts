import { PartialUser } from 'entities/user';
import { useAppDispatch } from 'shared/lib/hooks';
import { updateUser } from 'shared/api/features/user';


// interface Config {
// }

export const useFeaturesUser = () => {
  // export const useFeaturesUser = (config: Config = {}) => {
  // const { } = config;
  const dispatch = useAppDispatch();

  const serviceUpdateUser = (user: PartialUser) => dispatch(updateUser(user));

  return {
    serviceUpdateUser,
  }
};
