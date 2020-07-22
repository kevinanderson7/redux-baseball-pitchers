import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const addCatcherReducer = (state = [], action) => {
  if (action.type === 'ADD_CATCHER') {
    return [...state, action.payload];
  }
  return state;
};
const secondReducer = (state = {}, action) => {
  if (action.type === 'SECOND') {
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    addCatcherReducer,
    secondReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
