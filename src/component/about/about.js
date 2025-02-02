import Navbar from "../navbar/navbar";
import AboutHead from "./about_head/about_head";
import AboutRelax from "./about_relax/about_relax";
import AboutLog from "./about_log/about_log";
import Decor from "./decor/decor";
import Footer from "../footer/footer";
import Quality from "./Quality/Quality";

function AboutUs(){
    return(
        <div>
            <Navbar/>
            <AboutHead/>
            <AboutRelax/>
            <AboutLog/>
            <Decor/>
            <Quality/>
            <Footer/>
        </div>
    )
};

export default AboutUs;