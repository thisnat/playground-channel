import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBoardById } from '../../actions/BoardAction';

import TopicList from '../list/TopicList';
import NotFound from './NotFound';

const Board = (props) => {

    const { data,dispatch,match } = props;
    const { BoardStore } = data;

    useEffect(() => {
        dispatch(fetchBoardById(match.params.id));
    },[dispatch,match])

    return (
        <div>
            {
                BoardStore.boardData === null
                ? <NotFound />
                : <TopicList />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Board);