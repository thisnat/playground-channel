import axios from 'axios';

const fetchTopicDone = (data) => {
    return {
        type : "TOPIC_FETCH",
        payload : data
    }
}

const fetchTopicError = () => {
    return {
        type : "TOPIC_FETCH_ERROR"
    }
}

export const fetchTopicByBoardUrl = (url) => {
    return (dispatch,getState) => {
        axios.get(`http://localhost:3001/api/topic/board/${url}`)
        .then((res) => {
            dispatch(fetchTopicDone(res.data))
        })
        .catch((err) => {
            dispatch(fetchTopicError())
        });
    }
}