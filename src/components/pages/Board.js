import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBoardById } from '../../actions/BoardAction';
import { fetchTopicByBoardUrl } from '../../actions/TopicAction'

import TopicList from '../list/TopicList';
import NotFound from './NotFound';

const Board = (props) => {

    const dispatch = useDispatch();
    const boardData = useSelector((state) => state.BoardStore.boardData);
    const { match } = props;
    

    useEffect(() => {
        dispatch(fetchBoardById(match.params.id));
        dispatch(fetchTopicByBoardUrl(boardData.url));
    },[dispatch,match,boardData.url])

    return (
        <div>
            {
                boardData === null
                ? <NotFound />
                : <TopicList />
            }
        </div>
    );
};

export default Board;