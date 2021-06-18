import React from 'react';

import Board from '../Board'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="my-3">
                    <h1>welcome, kid! 🥴</h1>
                    <p>please choose the board from the list below.</p>
                </div>
                <div>
                    <Board title="movie" sub="Lorem ipsum dolor sit amet."/>
                    <Board title="geek" sub="Lorem ipsum dolor sit amet."/>
                    <Board title="game" sub="Lorem ipsum dolor sit amet."/>
                    <Board title="music" sub="Lorem ipsum dolor sit amet."/>
                    <Board title="random" sub="Lorem ipsum dolor sit amet."/>
                    <Board title="anime" sub="Lorem ipsum dolor sit amet."/>
                    <Board title="subculture" sub="Lorem ipsum dolor sit amet."/>
                </div>
            </div>
        </div>
    );
};

export default Home;