import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'app/common.css';
import reportWebVitals from './reportWebVitals';
import { routes } from 'app/routes';
import { theme } from 'app/theme';
import { IconContext } from 'react-icons';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{}}>
        <RouterProvider router={router} />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
