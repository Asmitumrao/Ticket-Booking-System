import { Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            {/* <hr /> */}
             {/* this it where nested pages will render */}
            <Outlet/>
        </div>
    )
}


export default MainLayout;