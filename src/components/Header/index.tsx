import chatSvg from '../../images/chat.svg';
import gearSvg from '../../images/gear.svg';
import IHeader from './header.interface';

const Header = ({ handleSideBar }: IHeader) => {

  return(
    <header>
      <img src={chatSvg} alt="Chat icon" />
      <img src={gearSvg} alt="Gear icon" onClick={() => handleSideBar()} />
    </header>
  )
}

export default Header;
