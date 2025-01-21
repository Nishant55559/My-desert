import MenuHead from "./Menu_head/Menu_head";
import Navbar from "../navbar/navbar";
import MenuBody from "./Menu_body/menu_body";

function Menu(){
    return(
        <div>
            <Navbar/>
            <MenuHead/>
            <MenuBody/>
        </div>
    )
};

export default Menu;