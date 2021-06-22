const Topic = (props) => {
    return (
        <div className="container mt-3">
            <h1>{`${props.match.params.id} / ${props.match.params.topicId}`}</h1>
        </div>
    );
};

export default Topic;