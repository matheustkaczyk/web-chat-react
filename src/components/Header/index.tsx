import chatSvg from '../../images/chat.svg';
import gearSvg from '../../images/gear.svg';
import IHeader from './header.interface';

const Header = ({ isOpen, setIsOpen }: IHeader) => {
  const handleSideBar = () => {
    const nav = document.getElementsByTagName('nav')[0] as Element;

    if (isOpen === false) {
      nav.classList.add('open-nav');
      setIsOpen(true);
    } else {
      nav.classList.remove('open-nav');
      setIsOpen(false);
    }
  }

  return(
    <header>
      <img src={chatSvg} alt="Chat icon" />
      <img src={gearSvg} alt="Gear icon" onClick={() => handleSideBar()} />
    </header>
  )
}

export default Header;
