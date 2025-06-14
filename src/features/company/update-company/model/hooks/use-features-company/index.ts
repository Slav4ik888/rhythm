import { PartialCompany } from 'entities/company';
import { useAppDispatch } from 'shared/lib/hooks';
import { updateCompany } from '../../services';



// interface Config {
// }

// export const useFeaturesCompany = (config: Config = {}) => {
// const { } = config;
export const useFeaturesCompany = () => {
  const dispatch = useAppDispatch();

  const serviceUpdateCompany = (company: PartialCompany) => dispatch(updateCompany(company));

  return {
    serviceUpdateCompany,
  }
};
