const initState = {
    boardData: {},
    boardFetchError: false
}

const BoardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BOARD_FETCH':
            return Object.assign({}, state, {
                boardData: action.payload,
                boardFetchError: false
            })
        case 'BOARD_FETCH_ERROR':
            return Object.assign({}, state, {
                boardData: {},
                boardFetchError: true
            })
        default : 
            return state;        
    }
}

export default BoardReducer;