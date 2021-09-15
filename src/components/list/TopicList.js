import { useSelector } from 'react-redux';
import Topic from '../cards/Topic'

const TopicList = () => {

    const TopicStore = useSelector((state) => state.TopicStore)
    const BoardStore = useSelector((state) => state.BoardStore)
    const { boardData } = BoardStore;

    return (
        <div className="container mt-3">
            <button className="btn btn-success" style={{float:"right"}}>Create Topic</button>
            <h1>{boardData.title}</h1>
            <p>{boardData.desc}</p>
            <div className="mt-3">
                {
                    Object.keys(TopicStore.topicData).length > 0
                        ? TopicStore.topicData.map((data, index) => (
                            <Topic key={index} data = {data} />
                        ))
                        : <p className="lead">no topic on this board</p>
                }
            </div>
        </div>
    );
};

export default TopicList;