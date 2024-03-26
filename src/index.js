import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Component/App';
// import Pro from './Component/ProLang';
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)