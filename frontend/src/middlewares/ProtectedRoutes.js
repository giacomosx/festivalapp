import {useSession} from "../hooks/useSession";
import {Outlet} from "react-router-dom";
import Login from '../pages/Login';
import {useSelector} from "react-redux";
import {logState} from "../redux/loginSlice";

const ProtectedRoutes = () => {
    const {expiredSession} = useSession()
    const isLoggedIn = useSelector(logState);

    return expiredSession === true || !isLoggedIn ? <Login /> : <Outlet />
}

export default ProtectedRoutes;