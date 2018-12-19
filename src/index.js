import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/app'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

const theApp = (
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
);

ReactDOM.render(theApp, document.getElementById('root'));

///TODO: set up more shit