const CommentBox = () => {
    return (
        <div className="mt-4">
            <p className="lead">comment</p>
            <div className="input-group">
                <textarea className="form-control" aria-label="With textarea"></textarea>
                <button className="btn btn-outline-success" type="button">comment</button>
            </div>
        </div>
    );
};

export default CommentBox;