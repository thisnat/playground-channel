import { combineReducers } from 'redux';

import BoardStore from './BoardReducer';
import TopicStore from './TopicReducer';
import CommentStore from './CommentReducer';

export default combineReducers({
    BoardStore,TopicStore,CommentStore
});