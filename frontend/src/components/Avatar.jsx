import { Link } from "react-router-dom";
import {logState, userState} from "../redux/loginSlice";
import { useSelector } from "react-redux";

const Avatar = () => {
  const isLoggedin = useSelector(logState)
  const user = useSelector(userState)
  const getInitials = name => name.split(' ').map(word => word[0].toUpperCase()).join('');

  return (
    <Link
      to={isLoggedin ? '/me/home' : '/login'}
      className="text-black bg-primary hover:bg-primaryHover focus:ring-4 focus:ring-primary text-lg rounded-full px-4 py-2 transition-all"
    >
      {!isLoggedin ? (
          <ion-icon name="person"></ion-icon>
      ) : (
          getInitials(user?.name ||user?.username)
      )}
    </Link>
  );
};

export default Avatar;
