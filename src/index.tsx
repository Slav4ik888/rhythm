import * as ReactDOM from 'react-dom/client';
import "regenerator-runtime/runtime";
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { App } from './app';

import cfg from 'app/config';
import { UIConfiguratorProvider } from 'app/providers/theme';
console.log(`Version: ${cfg.ASSEMBLY_DATE}`);
console.log(cfg.IS_DEV ? 'OFFLINE STATUS' : 'Online status');



// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <UIConfiguratorProvider>
          <App />
        </UIConfiguratorProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);


// git add . && git commit -m "refacted Dark scheme UIConfigurator" && git push -u origin main
