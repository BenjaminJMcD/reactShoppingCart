import { useState, useEffect } from 'react'
import Cards from './Cards';
import SingleItem from './SingleItem';
import Cart from './Cart';
import NavBar from './NavBar';
import EmptyCart from './EmptyCart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  const [shoppingCartList, setShoppingCartList] = useState(() => {
    const storedList = localStorage.getItem('cart');
    return storedList ? JSON.parse(storedList) : [];
  });

  const [items, setItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const list = await response.json();
      setItems(list);
      setFilteredProducts(list);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shoppingCartList));
  }, [shoppingCartList])


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

  function handleAddMultiple(e) {
    // GET AMOUNT VIA INPUT
    let input = document.getElementById("inputAmount");
    let amount = parseInt(input.value);
    let id = e.target.parentNode.getAttribute("listid");
    let object = items.find(obj => obj.id == id);
    let newObj = {...object, count: amount}
    let findObject = shoppingCartList.find(obj => obj.id == id);

    // ADDS AMOUNT INSTEAD OF 1
    if (shoppingCartList.includes(findObject)) {
        setShoppingCartList((prevItems) => 
            prevItems.map((item) => (
                item.id == id ? {...item, count: item.count+amount} : item
            ))
        )
    }
    else {
        let newCart = [...shoppingCartList, newObj];
        setShoppingCartList(newCart);
    }
}

  function add(e) {
    let id = e.target.parentNode.parentNode.getAttribute("listid");
    setShoppingCartList((prevItems) =>
      prevItems.map((item) => (
        item.id == id ? {...item, count: item.count+1 } : item
      ))
    )  
  };

  function subtract(e) {
    let id = e.target.parentNode.parentNode.getAttribute("listid");

    setShoppingCartList((prevItems) =>
      prevItems.map((item) => (
        item.id == id && item.count > 1 ? {...item, count: item.count-1 } : item
      ))
    )  
  };

  function handleChange() {
    window.location.reload();
  }

  function formatPrice(item) {
    return item.price.toFixed(2);
  }

  const total = shoppingCartList.reduce((accumulator, curr) => accumulator + curr.count, 0);

  function removeItem(e) {
    let id = e.target.parentNode.getAttribute("listid");
    console.log(e.target.parentNode)
    let newArray = shoppingCartList.filter(function(item) {
      return item.id != id
    })
    setShoppingCartList(newArray);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <div className="fixed top-0 z-10">
          <Link className="no-underline text-navy" to="/">
            <div onClick={resetFilter} className="bg-white h-32 pt-9">
              <h1 className="text-7xl text-center my-0 pl-4">FANCY SHOPS</h1>
            </div>
          </Link>
          <NavBar
            handleFilter = {handleFilter}
            shoppingCartList={shoppingCartList}
            total={total}
          />
        </div>
        <Routes>
            {loading ? (
              <Route path="/" element={
                <h1>LOADING</h1>
              }
              />
            ): <Route path="/" element={
                <Cards
                  filteredProducts={filteredProducts}
                  handleAdd={handleAdd}
                  formatPrice={formatPrice}
                />}
              />
            }
            <Route path="/details/:id" element={
              <SingleItem
                shoppingCartList={shoppingCartList}
                setShoppingCartList={setShoppingCartList}
                handleAddMultiple={handleAddMultiple}
                formatPrice={formatPrice}
              />}
            />
            {shoppingCartList.length > 0 ? (
            <Route path="/cart" element={
              <Cart
                shoppingCartList={shoppingCartList}
                setShoppingCartList={setShoppingCartList}
                total={total}
                add={add}
                subtract={subtract}
                handleChange={handleChange}
                formatPrice={formatPrice}
                removeItem={removeItem}
              />}
            />
            ): <Route path="/cart" element={
                <EmptyCart/>}
              />}
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App
