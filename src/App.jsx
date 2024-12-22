import { useState, useEffect } from 'react'
import Cards from './Cards';
import SingleItem from './SingleItem';
import Cart from './Cart';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const list = await response.json();
      setItems(list);
      setFilteredProducts(list);
    }
    fetchData();
  }, []);

  function handleFilter(e) {
    let filter = e.target.innerText.toLowerCase();
    if (filter == "men's apparel") {
        const filteredList = items.filter(item => item.category == "men's clothing");
        setFilteredProducts(filteredList);
    }
    else if (filter == "women's apparel") {
        const filteredList = items.filter(item => item.category == "women's clothing");
        setFilteredProducts(filteredList);
    }
    else if (filter == "jewelry") {
        const filteredList = items.filter(item => item.category == 'jewelery');
        setFilteredProducts(filteredList);
    }
    else {
        const filteredList = items.filter(item => item.category == filter);
        setFilteredProducts(filteredList);
    }
  }

  function resetFilter() {
    setFilteredProducts(items);
  }

  function handleAdd(e) {
    const parentNode = e.target.parentNode;
    const id = parentNode.getAttribute("listid");
    const object = items.find(obj => obj.id == id);
    if (shoppingCartList.length == 0) {
      setShoppingCartList([object]);
    }
    else {
      const newCart = [...shoppingCartList, object];
      setShoppingCartList(newCart);
    }
}

  return (
    <div className="app">
      <BrowserRouter>
        <Link className="styledLink" to="/">
          <div onClick={resetFilter} className="header">
            <h1 className="title">FANCY SHOPS</h1>
          </div>
        </Link>
        <NavBar
          handleFilter = {handleFilter}
          shoppingCartList={shoppingCartList} 
        />
        <Routes>
            <Route path="/" element={
              <Cards 
                filteredProducts={filteredProducts}
                handleAdd={handleAdd} 
              />} 
            />
            <Route path="/details/:id" element={
              <SingleItem
                shoppingCartList={shoppingCartList}
                setShoppingCartList={setShoppingCartList}
              />}
            /> 
            <Route path="/cart" element={
              <Cart 
              />} 
            />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
