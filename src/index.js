import React from 'react';
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store/store"

import AppRouter from './AppRoute';



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

