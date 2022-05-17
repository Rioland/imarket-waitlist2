import Appbar from "./Appbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return ( <div>
     <Appbar/>
     {children}
    <Footer/>

    </div> );
}
 
export default Layout;