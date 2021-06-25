import AdminCreateBoard from "../forms/AdminCreateBoard";
import AdminBoardList from "../list/AdminBoardList";

const admin = () => {

    const lol = { fontFamily:"Comic sans Ms" }

    return (
        <div className="container mt-3">
            <div className="card p-3">
                <h1 style={lol}>create board</h1>
                <div className="mt-3">
                    <AdminCreateBoard />
                </div>
            </div>
            <div className="card p-3 mt-3">
                <h1 style={lol}>manage board</h1>
                <div className="mt-3">
                    <AdminBoardList />
                </div>
            </div>
        </div>
    );
};

export default admin;