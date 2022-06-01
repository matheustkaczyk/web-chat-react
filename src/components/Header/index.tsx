import chatSvg from '../../images/chat.svg';
import gearSvg from '../../images/gear.svg';

const Header = () => {
  return(
    <header>
      <img src={chatSvg} alt="Chat icon" />
      <img src={gearSvg} alt="Gear icon" />
    </header>
  )
}

export default Header;
