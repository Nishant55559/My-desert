import HomeHead from "./home_head/home_head";
import Navbar from "../navbar/navbar";
import Collage from "./collage/collage";
import AdultChill from "./adult_chill/adult_chill";
import ChiefRecommend from "./chief_recommend/chief_recommend";
import OurMenu from "./our_menu/our_menu";
import ReserveFoot from "./ReserveFoot/ReserveFoot";
import Gallery from "./Gallery/Gallery";
import Footer from "../footer/footer";
import CardSlider from "./CardSlider/CardSlider";


function Home(){
    return(
        <div>
            <Navbar/>
            <HomeHead/>
            <Collage/>
            <AdultChill/>
            <ChiefRecommend/>
            <OurMenu/>
            <CardSlider/>
            <ReserveFoot/>
            <Gallery/>
            <Footer/>
            
        </div>
    )
};

export default Home;