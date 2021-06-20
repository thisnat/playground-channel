import dateFormat from "dateformat";

const Topic = ({data}) => {

    const date = Date.parse(data.lastUpdate);

    return (
        <div className="card my-3 mx-3 p-3">
            <h4>{data.title}</h4>
            <p>total posts : <strong>{data.postCount}</strong> <br /> last updated : <strong>{dateFormat(date,"dd/mmmm/yyyy - HH:mm:ss")}</strong></p>
        </div>
    );
};

export default Topic;