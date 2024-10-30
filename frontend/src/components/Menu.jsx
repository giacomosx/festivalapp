import { useState } from "react";
import { Link } from "react-router-dom";
import { mainMenu, festivals } from "../lib/constants";
import Avatar from "./Avatar";

const Menu = () => {
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [festivalsMenuOpen, setFestivalsMenuOpen] = useState(false);

  const handleMainMenu = () => {
    setMainMenuOpen(!mainMenuOpen);
  };

  const handleFestivalsMenu = () => {
    setFestivalsMenuOpen(!festivalsMenuOpen);
  };

  return (
    <>
      <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
        <Link
          to="/tickets"
          className="text-gray-800 border border-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-2 py-2 md:px-5 md:py-2.5 focus:outline-none"
        >
          Tickets
        </Link>
        <Avatar />
        <button
          data-collapse-toggle="mega-menu"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mega-menu"
          aria-expanded="false"
          onClick={handleMainMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        id="mega-menu"
        className={`${
          mainMenuOpen ? "w-full" : "hidden"
        } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
      >
        <ul className="divide-y divide-gray-900 flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 md:divide-y-0 rtl:space-x-reverse">
          <li>
            <button
              onClick={handleFestivalsMenu}
              id="mega-menu-dropdown-button"
              data-dropdown-toggle="mega-menu-dropdown"
              className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900  md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
            >
              Festivals{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="mega-menu-dropdown"
              className={`${
                festivalsMenuOpen ? "grid" : "hidden"
              } absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-3 `}
            >
              <div className="p-4  text-gray-900 md:pb-4 ">
                <ul
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button"
                >
                  {festivals.map((el, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={el.to}
                          className="text-gray-700  hover:text-primary "
                        >
                          {el.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
          {mainMenu.map((el, index) => {
            return (
              <li key={index}>
                <Link
                  to={el.to}
                  className="block py-2 px-3 text-gray-900  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 "
                >
                  {el.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
