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

  function handleAdd(e, number) {
    const parentNode = e.target.parentNode;
    const id = parentNode.getAttribute("listid");
    const object = items.find(obj => obj.id == id);
    const newObj = {...object, count: 1}
    const findObject = shoppingCartList.find(obj => obj.id == id)
    
    if (shoppingCartList.length == 0) {
      setShoppingCartList([newObj]);
    }
    else if (shoppingCartList.includes(findObject)) {
      setShoppingCartList((prevItems) =>
        prevItems.map((item) => (
          item.id == id ? {...item, count: item.count+1 } : item
        ))  
      )
    }
    else {
      const newCart = [...shoppingCartList, newObj];
      setShoppingCartList(newCart);
    }
  }

  const total = shoppingCartList.reduce((accumulator, curr) => accumulator + curr.count, 0);

  function updateAmount(e) {
    let value = e.target.value;

  }




  function add(e) {
    let id = e.target.parentNode.parentNode.getAttribute("listid");
    setShoppingCartList((prevItems) =>
      prevItems.map((item) => (
        item.id == id ? {...item, count: item.count+1 } : item
    )))  

    // UPDATE COUNT IN SHOPPINGCARTLIST


  }

  function subtract(e) {
    let id = e.target.parentNode.parentNode.getAttribute("listid");
    setShoppingCartList((prevItems) =>
      prevItems.map((item) => (
        item.id == id ? {...item, count: item.count-1 } : item
    )))  
  }

  function handleChange(e) {
    window.location.reload();

    // RELOAD PAGE

  }

  console.log(shoppingCartList)



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
          total={total}
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
                shoppingCartList={shoppingCartList}
                setShoppingCartList={setShoppingCartList}
                total={total}
                add={add}
                subtract={subtract}
                handleChange={handleChange}
              />} 
            />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
