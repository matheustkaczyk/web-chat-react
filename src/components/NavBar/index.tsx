import INavBar from "./navbar.interface";

const NavBar = ({ username }: INavBar) => {
  return(
    <nav>
      <h3>{username}</h3>
    </nav>
  )
}

export default NavBar;
