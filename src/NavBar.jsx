import shoppingCartIcon from './assets/grocery-store.png';
import { Link } from 'react-router-dom';

function NavBar({ handleFilter, total }) {

    return (
        <div className="w-screen inline-flex bg-[#FFFFFF]">
            <nav className="flex text-center xs:w-[350px] sm:mx-auto sm:w-[600px] sm:justify-center sm:pr-4"> 
                <Link className="no-underline text-navy  xs:px-3 xs:pt-6 sm:px-4 sm:py-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Electronics</p>
                </Link>
                <Link className="no-underline text-navy py-4 sm:px-4 px-2 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Men's Apparel</p>
                </Link>
                <Link className="no-underline text-navy py-4 sm:px-4 px-2 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Women's Apparel</p>
                </Link>
                <Link className="no-underline text-navy  xs:pt-6 sm:px-4 px-2 sm:py-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Jewelry</p>
                </Link>
            </nav>
            <div className="shopIcon-Dynamic">
              <Link to="/cart">
                  <img src={shoppingCartIcon} alt="Shopping Cart Image" className="w-10 h-10 absolute xs:right-7 xs:mt-5 sm:right-12 sm:mt-2" />
                  {total >0 &&
                  <p className="w-7 h-7 font-bold absolute text-center xs:right-4 xs:top-[140px] sm:pb-2 sm:right-9 sm:top-[128px] bg-white border-4 border-navy border-solid rounded-2xl">{total}</p>
                  }
              </Link>
            </div>
        </div>
    )
}

export default NavBar;