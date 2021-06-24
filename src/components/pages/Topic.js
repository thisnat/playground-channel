import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCommentById } from '../../actions/CommentAction';
import { fetchTopicByTopicId } from '../../actions/TopicAction';

import Comment from '../cards/Comment';
import CommentBox from '../forms/CommentBox';
import NotFound from '../pages/NotFound';

const Topic = (props) => {

    const { dispatch,match,data } = props;
    const { CommentStore,TopicStore } = data;

    useEffect(() => {
        dispatch(fetchCommentById(match.params.topicId));
        dispatch(fetchTopicByTopicId(match.params.topicId));
    },[dispatch,match])


    //very bad render logic, fix soon
    return (
        <div className="container mt-3">

            {
                Object.keys(TopicStore.topicData).length > 0
                ? <div>
                    <h5 style={{float:"right"}}>total posts : {TopicStore.topicData[0].postCount}</h5>
                    <h1>{TopicStore.topicData[0].title}</h1>
                </div>
                : <NotFound />
            }
            {
                Object.keys(CommentStore.commentData).length > 0 
                ? CommentStore.commentData.map((data,index) => (
                    <Comment key = {index} data = {data} />
                ))
                : null
            }
            {
                Object.keys(TopicStore.topicData).length > 0
                ? <CommentBox />
                : null
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Topic);