import Logo from "../components/Logo";
import Menu from "../components/Menu";


const Header = () => {

  return (
    <header className="bg-white px-2 py-4">
      <nav className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
        <Logo name={'FestivalApp'} />
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
