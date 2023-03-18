import React from 'react';
import ReactDOM from 'react-dom/client';
//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

//theme dark or light
import ThemeContextWrapper from './theme/ThemeWrapper';

//Browser Router
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeContextWrapper>
);

