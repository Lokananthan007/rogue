import Contact from "../pages/Contact";
import Homesec from "../pages/Homepage";
import Service from "../pages/Service";
import Blog from "../pages/Blog";

function Home(){
    return(
        <div>
            <Homesec/>
            <Service/>
            <Blog/>
            <Contact/>
        </div>
       
    );
}
export default Home;