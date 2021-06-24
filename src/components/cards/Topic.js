import dateFormat from "dateformat";

const Topic = ({data}) => {

    const date = Date.parse(data.lastUpdate);
    const url = `topic/${data.topicId}`

    return (
        <div className="card my-3 mx-3 p-3">
            <a href={url}>{data.title}</a>
            <p>total posts : <strong>{data.postCount}</strong> <br /> last updated : <strong>{dateFormat(date,"dd/mmmm/yyyy - HH:MM:ss")}</strong></p>
        </div>
    );
};

export default Topic;