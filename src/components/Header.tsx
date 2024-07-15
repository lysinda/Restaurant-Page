type HeaderProps = {
  setPage: (page: string) => void;
};

type NavItemProps = {
  target: string;
  name: string;
  setPage: (page: string) => void;
};

function Header(props: HeaderProps) {
  return (
    <div>
      <div className="header flex justify-between items-center bg-night-green">
        <div className="logo flex items-center">
          <img src="images/llama.png" className="w-32 p-2 pb-0"></img>
          <h1
            className="text-5xl font-playwrite ml-8 cursor-pointer"
            onClick={() => props.setPage("home")}
          >
            The Leafy Llama
          </h1>
        </div>
        <nav className="text-2xl mr-10">
          <ul className="flex">
            <NavItem name="Menu" target="menu" setPage={props.setPage} />
            <NavItem name="About" target="about" setPage={props.setPage} />
            <NavItem name="Contact" target="contact" setPage={props.setPage} />
          </ul>
        </nav>
      </div>
      <hr className="border-dark-spring-green border-2"></hr>
    </div>
  );
}

function NavItem(props: NavItemProps) {
  return (
    <li
      className="m-4 cursor-pointer"
      onClick={() => props.setPage(props.target)}
    >
      {props.name}
    </li>
  );
}

export default Header;
