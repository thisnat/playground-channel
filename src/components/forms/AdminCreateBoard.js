const AdminCreateBoard = () => {
    return (
        <div style={{padding:10}}>
            <input type="text" className="form-control" placeholder="title"/>
            <input type="text" className="mt-3 form-control" placeholder="description"/>
            <input type="text" className="mt-3 form-control" placeholder="board url"/>
            <button className="mt-3 btn btn-success">create</button>
        </div>
    );
};

export default AdminCreateBoard;