import Header from "./layouts/Navbar";
import Main from "./layouts/Main";
import Button from "./components/Button";
import BreadCrumb from "./components/BreadCrumb";

const Layout = ({children}) => {
    return ( 
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
     );
}
 
export default Layout;