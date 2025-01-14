import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import loginReducer from './redux/loginSlice'
import festivalReducer from './redux/festivalSlice'
import groupModalReducer from './redux/groupModalSlice'


const rootReducer = combineReducers({
    loginState: loginReducer,
    festivalState: festivalReducer,
    groupModalState: groupModalReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);

