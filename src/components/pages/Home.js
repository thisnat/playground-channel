import { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/BoardAction'

import Board from '../cards/Board'

const Home = (props) => {

    const { data,dispatch } = props;
    const { boardData,boardFetchError } = data;

    useEffect(() => {
        dispatch(fetchBoard());
    },[dispatch])


    const displayErrorMsg = () => {
        let spinner = document.getElementById('spinner');
        if (spinner !== null){
            spinner.remove();
        }

        return <h1>fetch error!</h1>
    }

    return (

        <div>
            <div className="container">
                <div className="my-3">
                    <h1>welcome, kid! 🥴</h1>
                    <p>please choose the board from the list below.</p>
                </div>
                <div>
                    {
                        Object.keys(boardData).length > 0
                        ? boardData.map((data,index) => (
                            <Board key={index} data={data}/>
                        ))
                        : <div className="spinner-border" role="status" id="spinner">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                    }

                    {
                        !boardFetchError
                        ? null
                        : displayErrorMsg()
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data : state.BoardStore
    }
}

export default connect(mapStateToProps)(Home);