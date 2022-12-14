import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from 'components/redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="react-06-redux--repeta">
       <Provider store={store}>
          <App />
       </Provider>
        
       
    </BrowserRouter>
  </React.StrictMode>
);
