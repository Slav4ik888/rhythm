import { createContext } from 'react';
import { UIConfiguratorContextType } from '../types';


export const UIConfiguratorContext = createContext<UIConfiguratorContextType>([] as unknown as UIConfiguratorContextType);

// Setting custom name for the context which is visible on react dev tools
UIConfiguratorContext.displayName = "UIConfiguratorContext";
