import shoppingCartIcon from './assets/grocery-store.png';
import { Link } from 'react-router-dom';

function NavBar({ handleFilter, total }) {

    return (
        <div className="w-screen inline-flex bg-[#FFFFFF]">
            <nav className="flex text-center sm:mx-auto xs:w-[270px] sm:w-[600px] xs:text-xs sm:text-base sm:justify-center sm:pr-4"> 
                <Link className="no-underline text-navy xs:py-5 sm:py-4 xs:pr-2 xs:pl-4 sm:px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Electronics</p>
                </Link>
                <Link className="no-underline text-navy xs:py-3 sm:py-4 xs:px-2 sm:px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Men's Apparel</p>
                </Link>
                <Link className="no-underline text-navy xs:py-3 sm:py-4 xs:px-2 sm:px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Women's Apparel</p>
                </Link>
                <Link className="no-underline text-navy xs:py-5 sm:py-4 xs:px-2 sm:px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Jewelry</p>
                </Link>
            </nav>
            <div className="shopIcon-Dynamic">
              <Link to="/cart">
                  <img src={shoppingCartIcon} alt="Shopping Cart Image" className="w-10 h-10 absolute xs:right-7 xs:mt-2 sm:right-12 sm:mt-2" />
                  {total >0 &&
                  <p className="w-7 h-7 font-bold absolute text-center xs:right-4 xs:top-[82px] sm:pb-2 sm:right-9 sm:top-[128px] bg-white border-4 border-navy border-solid rounded-2xl">{total}</p>
                  }
              </Link>
            </div>
        </div>
    )
}

export default NavBar;