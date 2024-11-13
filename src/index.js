import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'pretendard/dist/web/static/pretendard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reset-css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>    
);


