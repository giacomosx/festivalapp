import React, {useEffect} from 'react';
import Header from "./Navbar";
import Main from "./Main";
import UserNavbar from "../ui/UserNavbar";
import BreadCrumb from "../components/BreadCrumb";
import {useDispatch, useSelector} from "react-redux";
import {userState} from "../redux/loginSlice";
import {getUSerLogged} from "../redux/action/userAction";

const DashboardLayout = ({children, breadCrumb = true, userNavbar = true}) => {
    const dispatch = useDispatch();
    const user = useSelector(userState);

    useEffect(() => {
        dispatch(getUSerLogged());
    }, [dispatch])

    return (
        <>
            <Header />
            <Main>
                {breadCrumb && (
                    <BreadCrumb />
                )}
                {userNavbar && (
                    <UserNavbar user={user} />
                )}
                {children}
            </Main>
        </>
    );
};

export default DashboardLayout;