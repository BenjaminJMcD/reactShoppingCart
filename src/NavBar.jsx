import shoppingCartIcon from './assets/grocery-store.png';
import { Link } from 'react-router-dom';

function NavBar({ handleFilter, total }) {

    return (
        <div className="navbar">
            <nav>
                <Link className="styledLink" to="/">
                    <p onClick={handleFilter}>Electronics</p>
                </Link>
                <Link className="styledLink" to="/">
                    <p onClick={handleFilter}>Men's Apparel</p>
                </Link>
                <Link className="styledLink" to="/">
                    <p onClick={handleFilter}>Women's Apparel</p>
                </Link>
                <Link className="styledLink" to="/">
                    <p onClick={handleFilter}>Jewelry</p>
                </Link>
            </nav>
            <div className="shopIcon-Dynamic">
              <Link to="/cart">
                  <img src={shoppingCartIcon} alt="Shopping Cart Image" className="shoppingCartImg" />
                  {total >0 &&
                  <p className="iconCounter">{total}</p>
                  }
              </Link>
            </div>
        </div>
    )
}

export default NavBar;