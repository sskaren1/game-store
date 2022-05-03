// Importing router-dom
import { Link } from 'react-router-dom'
// Importing Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGhost, faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// Importing styles
import './../styles/components/header.scss'

const Header = (props) => {
  return (
    <header className={props.header}>
      <div className="header__container py-5 flex flex-col md:flex-row justify-between">
        <Link to="/" className="logo">
          <h1 className='logo__title text-white'><FontAwesomeIcon icon={faGamepad}/>&nbsp;Game Store</h1>
        </Link>

        <nav className="navegation">
          <ul className='text-white flex flex-row gap-x-10 justify-center items-center h-full'>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faGhost}/>&nbsp;Inicio</Link>
            </li>
            <li>
              <Link to="/product-store"><FontAwesomeIcon icon={faStore}/>&nbsp;Shop</Link>
            </li>
            <li>
              <Link to="/basket-view"><FontAwesomeIcon icon={faCartShopping}/>&nbsp;Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
