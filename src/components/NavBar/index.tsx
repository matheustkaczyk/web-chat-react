import Select from "../Select";
import INavBar from "./navbar.interface";

const NavBar = ({ username, handleChange, handleLeave }: INavBar) => {
  const Options = ['Geral', 'Games', 'Programação', 'Filmes', 'Séries'];
  return(
    <nav onMouseLeave={() => handleLeave()}>
      <h3>{username}</h3>
      <div>
        <Select label="Escolha uma sala" handleChange={handleChange} options={Options} id="category" />
      </div>
    </nav>
  )
}

export default NavBar;
