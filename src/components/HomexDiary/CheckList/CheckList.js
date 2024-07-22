import { useNavigate } from "react-router-dom";
import '../../../styles/HomexDiary/CheckList/CheckList.css'
import CheckItem from "./CheckItem";

export default function CheckList({initData}){
    const navigate = useNavigate();
    const onClickUpdate=()=>{
        navigate("/ask")
    }


    
    return(
        <div className="CheckList">
            <div className="title-wrapper">
                <h4> Checking for Me 🌱</h4>
                <div className="button-section"><button onClick={onClickUpdate}>수정하기</button></div>


            </div>
            <div className='list-wrapper-wide'>
                {
                    initData.map(
                        (item) => (
                            <CheckItem
                            key={item.id_askcheck}
                            {...item}/>
                        ))
                }
            </div>
        </div>
    )
}