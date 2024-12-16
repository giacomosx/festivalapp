import Header from "./layouts/Navbar";
import Main from "./layouts/Main";
import Button from "./components/Button";
import BreadCrumb from "./components/BreadCrumb";
import breadCrumb from "./components/BreadCrumb";

export const backgroundVariants = {
    'black': 'bg-black',
    'white': 'bg-white',
}
const Layout = ({children, user, breadCrumb = true, background = 'black'}) => {
    const bgVariant = backgroundVariants[background] || backgroundVariants.black;
    return (
        <div className={`flex flex-col w-full min-h-screen ${bgVariant}`}>
            <Header />
            <Main className={'flex-1'}>
                {breadCrumb && (
                    <BreadCrumb user={user} backgroundColor={bgVariant} />
                )}
                {children}
            </Main>
        </div>
     );
}
 
export default Layout;