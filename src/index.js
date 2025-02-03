// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Set the basename to your repository name
root.render(
  <BrowserRouter basename="/yardsale">
    <App />
  </BrowserRouter>
);
