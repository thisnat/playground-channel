import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBoardById } from '../../actions/BoardAction';

import TopicList from '../list/TopicList';
import NotFound from './NotFound';

const Board = (props) => {

    const { data,dispatch,match } = props;
    const { boardData } = data;

    useEffect(() => {
        dispatch(fetchBoardById(match.params.id));
    },[dispatch,match])

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

const mapStateToProps = (state) => {
    return {
        data : state.BoardStore
    }
}

export default connect(mapStateToProps)(Board);