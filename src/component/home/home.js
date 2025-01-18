import HomeHead from "./home_head/home_head";
import Navbar from "../navbar/navbar";
import Collage from "./collage/collage";
import AdultChill from "./adult_chill/adult_chill";

function Home(){
    return(
        <div>
            <Navbar/>
            <HomeHead/>
            <Collage/>
            <AdultChill/>
        </div>
    )
};

export default Home;