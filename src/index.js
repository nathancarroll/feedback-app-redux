import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const emptyFeedback = {
    feeling: '5',
    understanding: '5',
    support: '5',
    comments: ''
}

const feedback = (state=emptyFeedback, action) => {
    if (action.type === 'FEEDBACK_STEP'){
        state = {
            ...state,
            ...action.payload
        }
    } else if (action.type === 'RESTART'){
        state = emptyFeedback;
    }

    return state;
}

const storeInstance = createStore(combineReducers({feedback}), applyMiddleware(logger))

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
