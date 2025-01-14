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
                  <img src={shoppingCartIcon} alt="Shopping Cart Image" className="w-10 h-10 absolute right-12 mt-3" />
                  {total >0 &&
                  <p className="w-6 h-6 font-bold absolute text-center pb-2 right-10 top-32 mt-2 bg-white border-4 border-black border-solid rounded-xl">{total}</p>
                  }
              </Link>
            </div>
        </div>
    )
}

export default NavBar;