const initState = {
    topicData: {},
    topicFetchError: false
}

const TopicReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOPIC_FETCH':
            return Object.assign({}, state, {
                topicData: action.payload,
                topicFetchError: false
            })
        case 'TOPIC_FETCH_ERROR':
            return Object.assign({}, state, {
                topicData: {},
                topicFetchError: true
            })
        default : 
            return state;        
    }
}

export default TopicReducer;