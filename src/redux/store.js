import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import OrganizationReducer from './OrganizationReducer';

let reducers = combineReducers({
    Organization: OrganizationReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store
export default store;