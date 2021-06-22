import dateFormat from "dateformat";

const Comment = ({data}) => {

    const date = Date.parse(data.created_at);

    return (
        <div className="card my-3 mx-3 p-3">
            <p style={{fontSize:18}}><span className="badge rounded-pill bg-primary">{data.commentId}</span> user:  {data.userId}
            <i style={{float:"right"}}>{dateFormat(date,"dd/mmmm/yyyy - HH:MM:ss")}</i></p>
            <p>{data.body}</p>
        </div>
    );
};

export default Comment;