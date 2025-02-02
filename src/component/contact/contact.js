import Navbar from "../navbar/navbar";
import ContactHead from "./contact_head/contact_head";
import Feedback from "../reserve_table/feedback/feedback";
import Footer from "../footer/footer";
import Locate from "../reserve_table/map/map";

function Contact(){
    return(

       <div>
        <Navbar/>
        <ContactHead/>
        <Feedback/>
        <Locate/>
        <Footer/>
       </div>

    )
};

export default Contact;