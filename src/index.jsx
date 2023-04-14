import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DashboardProvidor from './Context/DashboardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashboardProvidor>
      <App />
    </DashboardProvidor>
  </React.StrictMode>
);