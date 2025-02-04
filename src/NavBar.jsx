import shoppingCartIcon from './assets/grocery-store.png';
import { Link } from 'react-router-dom';

function NavBar({ handleFilter, total }) {

    return (
        <div className="w-screen inline-flex bg-[#FFFFFF]">
            <nav className="flex text-center sm:mx-auto xs:w-[270px] sm:w-[600px] xs:text-xs xs:ml-5 sm:text-base sm:justify-center sm:pr-4"> 
                <Link className="no-underline text-navy xs:py-5 sm:py-4 xs:px-2 xs:ml-2 sm:px-2 md:px-4 sm:ml-0 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Electronics</p>
                </Link>
                <Link className="no-underline text-navy xs:py-3 sm:py-4 xs:px-2 sm:px-2 md:px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Men's Apparel</p>
                </Link>
                <Link className="no-underline text-navy xs:py-3 sm:py-4 xs:px-2 sm:px-2 md:px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Women's Apparel</p>
                </Link>
                <Link className="no-underline text-navy xs:py-5 sm:py-4 xs:px-2 sm:px-2 md:px-4 hover:bg-navy hover:text-white" to="/">
                    <p onClick={handleFilter}>Jewelry</p>
                </Link>
            </nav>
            <div className="shopIcon-Dynamic">
              <Link to="/cart">
                  <img src={shoppingCartIcon} alt="Shopping Cart Image" className="w-10 h-10 absolute xs:right-7 mt-2 sm:right-8 md:right-12" />
                  {total >0 &&
                  <p className="w-7 h-7 leading-[16px] sm:leading-[24px] font-bold absolute text-center xs:right-4 xs:top-[82px] xs:pb-5 sm:pb-2 sm:right-5 md:right-9 sm:top-[128px] bg-white border-4 border-navy border-solid rounded-2xl">{total}</p>
                  }
              </Link>
            </div>
        </div>
    )
}

export default NavBar