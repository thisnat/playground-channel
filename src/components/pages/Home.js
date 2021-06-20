import { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/BoardAction'

import Board from '../cards/Board'

const Home = (props) => {

    const { data,dispatch } = props;

    useEffect(() => {
        dispatch(fetchBoard());
    },[dispatch])

    return (

        <div>
            <div className="container">
                <div className="my-3">
                    <h1>welcome, kid! 🥴</h1>
                    <p>please choose the board from the list below.</p>
                </div>
                <div>
                    {
                        Object.keys(data.boardData).length > 0
                        ? data.boardData.map((data,index) => (
                            <Board key={index} data={data}/>
                        ))
                        : <h1>loading...</h1>
                    }

                    {
                        !data.boardFetchError
                        ? null
                        : <h1>fetch error</h1>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(Home);