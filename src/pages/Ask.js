import { useContext, useState, useEffect } from "react";
import { DiaryStateContext, DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import StateCheck from "../components/StateCheck";

export default function Ask(){
    const { onListUpdate,onListCreate } = useContext(DiaryDispatchContext);
    const { data_l } = useContext(DiaryStateContext);
    const [initData, setInitData] = useState([]);
    const user_id = 1//useParams?

    useEffect(() => {     
        // Filtering initial data
        const foundData = data_l.filter(item => String(item.id_user) === String(user_id));
        setInitData(foundData);
    }, [data_l]);

    const onUpdate = (id_ask, id_user, content, isdone) => {
        initData.length?
        onListUpdate(id_ask, id_user, content, isdone)
        :onListCreate(id_ask, id_user, content, isdone)
    }

    return (
        <div>
            <div>
                <StateCheck initData={initData} user_id={user_id} onUpdate={onUpdate}/>
            </div>
        </div>
    );
}