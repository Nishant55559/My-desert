import Navbar from "../navbar/navbar";
import AboutHead from "./about_head/about_head";
import AboutRelax from "./about_relax/about_relax";
import AboutLog from "./about_log/about_log";

function AboutUs(){
    return(
        <div>
            <Navbar/>
            <AboutHead/>
            <AboutRelax/>
            <AboutLog/>
        </div>
    )
};

export default AboutUs;