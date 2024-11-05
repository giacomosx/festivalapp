import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <Link
      to="/login"
      className="text-black bg-primary hover:bg-primaryHover focus:ring-4 focus:ring-primary text-lg rounded-full px-4 py-2  "
    >
      <ion-icon name="person"></ion-icon>
    </Link>
  );
};

export default Avatar;
