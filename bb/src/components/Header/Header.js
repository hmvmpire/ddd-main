import { useNavigate } from 'react-router-dom';
import logo from '../../assets/bcmlogo.png';
import logo2 from '../../assets/bcmlogo3.png';
import { useThemeContext } from '../../store/ThemeContext';
import ThemeChanger from '../ThemeChanger/ThemeChanger';

const Header = (props) => {
  let navigate = useNavigate();
  const { themeValue } = useThemeContext();
  const handleOnClick = () => navigate("/history");
  return (
    <>
      <header>
        <img alt='bcmlogo' src={themeValue === "light" ? logo : logo2} onClick={handleOnClick} />
        <ThemeChanger />
      </header>
    </>
  );
};

export default Header;
