import { useContext } from 'react';
import { ColorModeContext } from './context';



interface UseColorMode {
  toggleColorMode: () => void
}

export const useColorMode = (): UseColorMode => useContext(ColorModeContext);
