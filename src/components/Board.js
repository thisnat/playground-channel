import React from 'react';

const Board = ({title,sub}) => {
    return (
        <div className="card my-3 mx-3 p-3">
            <h3>{title}</h3>
            <p>{sub}</p>
        </div>
    );
};

export default Board;