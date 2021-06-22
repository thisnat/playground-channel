import axios from 'axios';

const fetchCommentDone = (data) => {
    return {
        type : "COMMENT_FETCH",
        payload : data
    }
}

const fetchCommentError = () => {
    return {
        type : "COMMENT_FETCH_ERROR"
    }
}

export const fetchComment = () => {
    return (dispatch,getState) => {
        axios.get('http://localhost:3001/api/comment')
        .then((res) => {
            dispatch(fetchCommentDone(res.data))
        })
        .catch((err) => {
            dispatch(fetchCommentError())
        });
    }
}

export const fetchCommentById = (id) => {
    return (dispatch,getState) => {
        axios.get(`http://localhost:3001/api/comment/id/${id}`)
        .then((res) => {
            dispatch(fetchCommentDone(res.data))
        })
        .catch((err) => {
            dispatch(fetchCommentError())
        });
    }
}