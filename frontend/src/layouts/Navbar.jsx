import Logo from "../components/Logo";
import Menu from "../components/Menu";


const Header = () => {

  return (
    <header className="px-2 py-4 bg-white border-b border-gray-900">
      <nav className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
        <Logo name={'FestivalApp'} />
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
