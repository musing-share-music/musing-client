import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '#/app/';
import reportWebVitals from '#/reportWebVitals';
import 'shared/styles/reset';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
