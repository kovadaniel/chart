import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import "app/styles/index.scss";
import { StoreProvider } from 'app/providers/storeProvider';
import { ThemeProvider } from 'app/providers/themeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
