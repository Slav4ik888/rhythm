import { UIConfigProviderState } from './state';

export interface UIConfigContextType extends Array<UIConfigProviderState | any> {
  0: UIConfigProviderState
  1: any
};
