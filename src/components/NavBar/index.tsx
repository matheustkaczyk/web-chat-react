import { ChangeEvent, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import INavBar from "./navbar.interface";
import editIcon from '../../images/edit.svg';
import Button from "../Button";

const NavBar = ({ username, setUsername, handleChange, handleSideBar }: INavBar) => {
  const [isOpen, setIsOpen] = useState(false);

  const Options = ['Geral', 'Games', 'Programação', 'Filmes', 'Séries'];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleNickname = () => {
    localStorage.setItem('username', username);
    setIsOpen(false);
  }

  return(
    <nav onMouseLeave={() => handleSideBar()}>
      <div>
        <h3 onClick={() => handleOpen()}>{username} {<img src={editIcon} alt="Edit icon"/>}</h3>
        {isOpen === true && 
          <div>
            <Input type="text" onChange={(e) => setUsername((e.target as HTMLInputElement).value)} placeholder="Mude seu nickname"  />
            <Button type="button" text="Enviar" onClick={() => handleNickname()} />
          </div>
          }
        <div>
          <Select label="Escolha uma sala" handleChange={handleChange} options={Options} id="category" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
