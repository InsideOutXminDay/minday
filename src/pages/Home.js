import CalendarComponent from "../components/Calendar";
import Header from "../components/Header";

export default function Home(){
    return(
        <div style={{display:"flex"}}>
            <Header/>
            <CalendarComponent/>
        </div>
    )
}