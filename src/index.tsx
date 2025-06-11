import * as ReactDOM from 'react-dom/client';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { App } from './app';

import cfg from 'app/config';
import { UIConfiguratorProvider } from 'app/providers/theme';
import { __devLog } from 'shared/lib/tests/__dev-log';

/* eslint-disable-next-line no-console */
console.log(`Version: ${cfg.ASSEMBLY_DATE}`);
__devLog('Status: ', cfg.IS_DEV ? 'OFFLINE' : 'ONLINE');



// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

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


// git add . && git commit -m "continue refact darkMode overrides Checkbox & Chip" && git push -u origin main
