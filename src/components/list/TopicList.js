import { useEffect } from 'react';
import { connect } from 'react-redux';

import Topic from '../cards/Topic'

import { fetchTopicByBoardUrl } from '../../actions/TopicAction'

const TopicList = (props) => {

    const { data, dispatch } = props;
    const { TopicStore, BoardStore } = data;
    const { boardData } = BoardStore;

    useEffect(() => {
        dispatch(fetchTopicByBoardUrl(boardData.url));
    }, [dispatch, boardData])

    return (
        <div className="container mt-3">
            <button className="btn btn-success" style={{float:"right"}}>Create Topic</button>
            <h1>{boardData.title}</h1>
            <p>{boardData.desc}</p>
            <div className="mt-3">
                {
                    Object.keys(TopicStore.topicData).length > 0
                        ? TopicStore.topicData.map((data, index) => (
                            <Topic key={index} data = {data}/>
                        ))
                        : <h1>no topic!</h1>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(TopicList);