import { UIConfiguratorProviderState } from './state';

export interface UIConfiguratorContextType extends Array<UIConfiguratorProviderState | any> {
  0: UIConfiguratorProviderState
  1: any
};
