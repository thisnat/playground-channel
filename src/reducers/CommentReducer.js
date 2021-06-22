const initState = {
    commentData: {},
    commentFetchError: false
}

const CommentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'COMMENT_FETCH':
            return Object.assign({}, state, {
                commentData: action.payload,
                commentFetchError: false
            })
        case 'COMMENT_FETCH_ERROR':
            return Object.assign({}, state, {
                commentData: {},
                commentFetchError: true
            })
        default : 
            return state;        
    }
}

export default CommentReducer;