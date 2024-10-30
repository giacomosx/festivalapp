import Header from "./layouts/Navbar";
import Main from "./layouts/Main";

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