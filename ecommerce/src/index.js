import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductContext from './context/ProductContext';
import { FilterContextProvider } from './context/FilterContext';
import { CartContextProvider } from './context/CartContext';
import { Auth0Provider } from "@auth0/auth0-react";




const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_DOMAIN
const clientid = process.env.REACT_APP_CLIENT_ID

root.render(

  <Auth0Provider
    domain={domain}
    clientId={clientid}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <ProductContext>

        <FilterContextProvider>
          <BrowserRouter>

            <CartContextProvider>


              <App />
            </CartContextProvider>


          </BrowserRouter>

        </FilterContextProvider>
      </ProductContext>
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
