import axios from 'axios';

const fetchBoardDone = (data) => {
    return {
        type : "BOARD_FETCH",
        payload : data
    }
}

const fetchBoardError = () => {
    return {
        type : "BOARD_FETCH_ERROR"
    }
}

export const fetchBoard = () => {
    return (dispatch,getState) => {
        axios.get('http://localhost:3001/api/board')
        .then((res) => {
            dispatch(fetchBoardDone(res.data))
        })
        .catch((err) => {
            dispatch(fetchBoardError())
        });
    }
}