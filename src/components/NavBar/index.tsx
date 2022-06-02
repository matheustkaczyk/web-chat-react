import Select from "../Select";
import INavBar from "./navbar.interface";

const NavBar = ({ username, handleChange }: INavBar) => {
  const Options = ['Geral', 'Games', 'Programação', 'Filmes', 'Séries'];
  return(
    <nav>
      <h3>{username}</h3>
      <div>
        <Select label="Escolha uma sala" handleChange={(e) => handleChange(e)} options={Options} id="category" />
      </div>
    </nav>
  )
}

export default NavBar;
