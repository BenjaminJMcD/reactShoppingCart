import { useState, useEffect } from 'react'
import Cards from './Cards';
import SingleItem from './SingleItem';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);
  const [shoppingCartList, setShoppingCartList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (filter == null) {
        const response = await fetch('https://fakestoreapi.com/products')
        const list = await response.json();
        setItems(list);
      }
      else if (filter == 'electronics') {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        const list = await response.json();
        setItems(list);
      }
      else if (filter == `women's apparel`) {
        const response = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
        const list = await response.json();
        setItems(list);
      }
      else if (filter == `men's apparel`) {
        const response = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
        const list = await response.json();
        setItems(list);
      }
      else if (filter == `jewelry`) {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const list = await response.json();
        setItems(list);
      }
    }
    fetchData();
  }, [filter]);

  function handleFilter(e) {
    if (e.target.innerText == "FANCY SHOPS") {
      setFilter(null);
    }
    else {
      setFilter(e.target.innerText.toLowerCase());
    }
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

  function viewSingleItem(e) {

  }




  return (
    <div className="app">
      <div className="header">
        <h1 className="title">FANCY SHOPS</h1>
      </div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/product/:id" element={<SingleItem />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
