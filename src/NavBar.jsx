import shoppingCartIcon from './assets/grocery-store.png';
import { Link } from 'react-router-dom';

function NavBar({ handleFilter, total }) {

    return (
        <div className="w-screen inline-flex my-0 border-b pb-5">
            <nav className="flex justify-between w-screen mx-44 pt-4 "> 
                <Link className="no-underline text-black pt-1" to="/">
                    <p onClick={handleFilter}>Electronics</p>
                </Link>
                <Link className="no-underline text-black pt-1" to="/">
                    <p onClick={handleFilter}>Men's Apparel</p>
                </Link>
                <Link className="no-underline text-black pt-1" to="/">
                    <p onClick={handleFilter}>Women's Apparel</p>
                </Link>
                <Link className="no-underline text-black pt-1" to="/">
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