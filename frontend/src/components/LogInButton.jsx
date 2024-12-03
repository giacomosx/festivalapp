import {Link} from "react-router-dom";
import {logState, userState} from "../redux/loginSlice";
import {useSelector} from "react-redux";

const LogInButton = () => {
    const isLoggedIn = useSelector(logState)
    const user = useSelector(userState)
    const getInitials = name => name.split(' ').map(word => word[0].toUpperCase()).join('');

    return (
        <Link
            to={isLoggedIn ? '/me/home' : '/login'}
            className="w-12 h-12 flex justify-center items-center text-black bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-primary text-lg rounded-full transition-all"
        >
            {!isLoggedIn ? (
                <svg className="w-6 h-6 text-gray-900 -left-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"></path>
                </svg>
            ) : (
                getInitials(user?.name || user?.username)
            )}
        </Link>
    );
};

export default LogInButton;
