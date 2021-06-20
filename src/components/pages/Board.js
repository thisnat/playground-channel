const Board = (props) => {
    return (
        <div>
            <div className="container mt-3">
                <h1>{props.match.params.id}</h1>
            </div>
        </div>
    );
};

export default Board;