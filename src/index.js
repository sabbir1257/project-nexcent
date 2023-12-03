import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="mx-auto max-w-[1650px]">
      <RouterProvider router={router} />
 </div>
);

reportWebVitals();
