import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCommentById } from '../../actions/CommentAction';
import { fetchTopicByTopicId } from '../../actions/TopicAction';

import Comment from '../cards/Comment';
import CommentBox from '../forms/CommentBox';
import NotFound from '../pages/NotFound';

const Topic = (props) => {

    const { match } = props;
    const dispatch = useDispatch();
    const TopicStore = useSelector((state) => state.TopicStore);
    const CommentStore = useSelector((state) => state.CommentStore);

    useEffect(() => {
        dispatch(fetchCommentById(match.params.topicId));
        dispatch(fetchTopicByTopicId(match.params.topicId));
    }, [dispatch, match])


    //very bad render logic, fix soon
    return (
        <div className="container mt-3">
            {
                TopicStore.topicData.length > 0
                    ? <div>
                        <h5 style={{ float: "right" }}>total posts : {TopicStore.topicData[0].postCount}</h5>
                        <h1>{TopicStore.topicData[0].title}</h1>
                    </div>
                    : <NotFound />
            }
            {
                CommentStore.commentData.length > 0
                    ? CommentStore.commentData.map((data, index) => (
                        <Comment key={index} data={data} />
                    ))
                    : null
            }
            {
                TopicStore.topicData.length > 0
                    ? <CommentBox />
                    : null
            }
        </div>
    );
};


export default Topic;