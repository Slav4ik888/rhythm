import * as ReactDOM from 'react-dom/client';
import "regenerator-runtime/runtime";
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store';
import { MaterialUIControllerProvider } from 'app/providers/theme'; // ThemeProvider
import { ErrorBoundary } from 'app/providers/error-boundary';
import { App } from './app';


import cfg from 'app/config';
console.log(`Version: ${cfg.ASSEMBLY_DATE}`);


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <MaterialUIControllerProvider>
            <App />
          </MaterialUIControllerProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


// git add . && git commit -m "29.08.2024 finish added dashboard container" && git push -u origin main
// rgb(240, 242, 245);
