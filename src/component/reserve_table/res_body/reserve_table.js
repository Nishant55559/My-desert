import Navbar from "../../navbar/navbar";
import ReserveForm from "../reserve_form/reserve_form";
import ReserveBody from "./reserve_body";
import Contact from '../Contact/Contact';
import Locate from "../map/map";
import Gallery from "../../home/Gallery/Gallery";
import Footer from "../../footer/footer";
import Feedback from "../feedback/feedback";

function Reserve_table(){
    return(
        <div>
            <Navbar/>
            <ReserveBody/>
            <ReserveForm/>
            <Contact/>
            <Locate/>
            <Feedback/>
            <Gallery/>
            <Footer/>
        </div>
    )
};

export default Reserve_table;