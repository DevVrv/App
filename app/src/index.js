import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

// import bootstrap styles
import './assets/vendors/bootstrap-5.1.3-dist/css/bootstrap-grid.min.css'
import './assets/vendors/bootstrap-5.1.3-dist/css/bootstrap-utilities.min.css'

// import base styles
import './assets/css/style.min.css'

// root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
reportWebVitals();
