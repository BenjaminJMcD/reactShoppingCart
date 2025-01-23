import shoppingCartIcon from './assets/grocery-store.png';
import { Link } from 'react-router-dom';

function NavBar({ handleFilter, total }) {

    return (
        <div className="w-screen inline-flex  border-b border-navy">
            <nav className="flex justify-between max-w-xl m-auto "> 
                <Link className="no-underline text-navy py-4 px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Electronics</p>
                </Link>
                <Link className="no-underline text-navy py-4 px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Men's Apparel</p>
                </Link>
                <Link className="no-underline text-navy py-4 px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Women's Apparel</p>
                </Link>
                <Link className="no-underline text-navy py-4 px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Jewelry</p>
                </Link>
            </nav>
            <div className="shopIcon-Dynamic">
              <Link to="/cart">
                  <img src={shoppingCartIcon} alt="Shopping Cart Image" className="w-10 h-10 absolute right-12 mt-2" />
                  {total >0 &&
                  <p className="w-7 h-7 font-bold absolute text-center pb-2 right-9 top-30  bg-white border-4 border-navy border-solid rounded-2xl">{total}</p>
                  }
              </Link>
            </div>
        </div>
    )
}

export default NavBar;