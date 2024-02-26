import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider}  from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './dataHouse/Reducers';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const store=configureStore({
  reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
 <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
       <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
