import { createContext } from 'react';
import { UIConfigContextType } from '../types';


export const UIConfigContext = createContext<UIConfigContextType>([] as unknown as UIConfigContextType);

// Setting custom name for the context which is visible on react dev tools
UIConfigContext.displayName = "UIConfigContext";
