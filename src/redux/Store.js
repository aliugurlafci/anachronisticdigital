import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import Config from './Reducers'

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Config, composeEnhancers(
    applyMiddleware(thunk)
));
export default Store