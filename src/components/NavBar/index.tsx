import { Suspense, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import INavBar from "./navbar.interface";
import editIcon from '../../images/edit.svg';

const NavBar = ({ username, handleChange, handleSideBar }: INavBar) => {
  const [isOpen, setIsOpen] = useState(false);

  const Options = ['Geral', 'Games', 'Programação', 'Filmes', 'Séries'];

  return(
    <nav onMouseLeave={() => handleSideBar()}>
      <h3>{username} {<img src={editIcon} alt="Edit icon"/>}</h3>
      {isOpen === true && <Input type="text" onChange={() => {}} placeholder="Mude seu username"  />}
      <div>
        <Select label="Escolha uma sala" handleChange={handleChange} options={Options} id="category" />
      </div>
    </nav>
  )
}

export default NavBar;
