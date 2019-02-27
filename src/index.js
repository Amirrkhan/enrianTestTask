import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes'

import './ui/sass/ui.sass'
import 'react-table/react-table.css'



const App = () => (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));


