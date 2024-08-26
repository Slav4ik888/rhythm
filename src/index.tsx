import * as ReactDOM from 'react-dom/client';
import "regenerator-runtime/runtime";
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from 'app/providers/theme';
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
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


// git add . && git commit -m "07.04.2024" && git push -u origin main
