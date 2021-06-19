import React from 'react';

const Board = ({data}) => {
    return (
        <div className="card my-3 mx-3 p-3">
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
        </div>
    );
};

export default Board;