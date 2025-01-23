import MenuHead from "./Menu_head/Menu_head";
import Navbar from "../navbar/navbar";
import MenuBody from "./Menu_body/menu_body";
import Footer from "../footer/footer";

function Menu(){
    return(
        <div>
            <Navbar/>
            <MenuHead/>
            <MenuBody/>
            <Footer/>
        </div>
    )
};

export default Menu;