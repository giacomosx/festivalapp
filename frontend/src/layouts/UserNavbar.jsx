import { Link } from "react-router-dom";
import { userMenu } from "../lib/constants";

const UserNavbar = () => {
  return (
    <nav className="py-8">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-xl font-bold">My Private Area</h2>
        <button className="text-white border border-white  hover:bg-gray-900 focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-sm px-2 py-2 md:px-5 md:py-2.5 focus:outline-none">
          Log out
        </button>
      </div>
      <ul className="flex divide-x-2 pt-4">
        {userMenu.map((el, index) => {
          return (
            <li key={index} className="text-sm px-4 first:ps-0 uppercase">
              <Link to={el.to}>{el.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default UserNavbar;
