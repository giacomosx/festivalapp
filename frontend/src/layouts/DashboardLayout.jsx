import React, {useEffect} from 'react';
import Header from "./Navbar";
import Main from "./Main";
import UserNavbar from "../ui/UserNavbar";
import BreadCrumb from "../components/BreadCrumb";
import {useDispatch, useSelector} from "react-redux";
import {userState} from "../redux/loginSlice";
import {getUSerLogged} from "../redux/actions/userAction";

const DashboardLayout = ({children, breadCrumb = true, userNavbar = true}) => {
    const dispatch = useDispatch();
    const user = useSelector(userState);

    useEffect(() => {
        dispatch(getUSerLogged());
    }, [dispatch])

    return (
        <div className={'flex flex-col bg-black w-full min-h-screen relative'}>
            <Header />
            <Main >
                {breadCrumb && (
                    <BreadCrumb user={user} />
                )}
                {userNavbar && (
                    <UserNavbar user={user} />
                )}
                {children}
            </Main>
        </div>
    );
};

export default DashboardLayout;