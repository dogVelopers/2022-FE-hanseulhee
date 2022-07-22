import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { StyledGlobal } from './styles/GlobalStyle';
import Router from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <StyledGlobal />
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);
