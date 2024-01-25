// Importing necessary React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main stylesheet
import './index.css';

// Importing the main App component
import App from './App';

// Importing the function to report web vitals
import reportWebVitals from './reportWebVitals';

// Creating a root for rendering React content into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within a StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Reporting web vitals for performance monitoring
reportWebVitals();
