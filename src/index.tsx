import * as ReactDOM from 'react-dom/client';
import "regenerator-runtime/runtime";
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store';
import { MaterialUIControllerProvider } from 'app/providers/theme-old'; // ThemeProvider
import { ErrorBoundary } from 'app/providers/error-boundary';
import { App } from './app';

import cfg from 'app/config';
import { ThemeProvider } from 'app/providers/theme';
console.log(`Version: ${cfg.ASSEMBLY_DATE}`);



// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <MaterialUIControllerProvider> {/* TODO: Remove */}
            <App />
          </MaterialUIControllerProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);


// git add . && git commit -m "start refact themeProvider" && git push -u origin main
