import React from 'react';

const Board = ({data}) => {
    return (
        <div className="card my-3 mx-3 p-3">
            <a href={data.url} style={{fontSize:32}}>{data.title}</a>
            <p>{data.desc}</p>
        </div>
    );
};

export default Board;