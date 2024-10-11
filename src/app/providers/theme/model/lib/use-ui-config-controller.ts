import { useContext } from 'react';
import { UIConfigContextType } from '../types';
import { UIConfigContext } from './ui-config-context';



export const useUIConfigController = (): UIConfigContextType => {
  const context = useContext(UIConfigContext);

  if (! context) {
    throw new Error(
      "useUIConfigController should be used inside the UIConfigContextProvider."
    );
  }

  return context;
}
