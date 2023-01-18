import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

// import bootstrap styles
import './assets/css/bootstrap-5.1.3/bootstrap-grid.min.css'
import './assets/css/bootstrap-5.1.3/bootstrap-utilities.min.css'

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
