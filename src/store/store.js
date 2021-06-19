import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import BoardReducer from '../reducers/BoardReducer'

const store = createStore(BoardReducer,applyMiddleware(thunk));

export default store;