import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios"
import { Provider } from 'react-redux';
import Store from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.interceptors.request.use(request => {

  // Modify the request config
  const modifiedRequest = {
    ...request,
    headers: {
      ...request.headers,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    // url: 'http://localhost:7000' + request.url,

    url: 'https://api.yasinschools.com' + request.url,
  };
    return modifiedRequest;
});

root.render(
  <React.StrictMode>
      <Provider store={Store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ocrw vhif bixj xdqt ggggggggggpin
