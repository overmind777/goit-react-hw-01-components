import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { GlobalStyles } from './styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
