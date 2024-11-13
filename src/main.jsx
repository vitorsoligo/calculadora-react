import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './App.css';

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(rootElement);