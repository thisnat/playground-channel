import { combineReducers } from 'redux';

import BoardStore from './BoardReducer';
import TopicStore from './TopicReducer';

export default combineReducers({
    BoardStore,TopicStore
});