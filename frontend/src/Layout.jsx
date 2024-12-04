import Header from "./layouts/Navbar";
import Main from "./layouts/Main";
import Button from "./components/Button";
import BreadCrumb from "./components/BreadCrumb";
import breadCrumb from "./components/BreadCrumb";

const Layout = ({children, user, breadCrumb = true}) => {
    return ( 
        <>
            <Header />
            <Main>
                {breadCrumb && (
                    <BreadCrumb user={user} />
                )}
                {children}
            </Main>
        </>
     );
}
 
export default Layout;