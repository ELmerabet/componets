import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./classcomponents/App";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App titre="This is a react class component title" />
  </React.StrictMode>
);

reportWebVitals();
