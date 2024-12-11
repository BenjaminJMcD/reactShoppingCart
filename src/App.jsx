import { useState, useEffect } from 'react'
import Cards from './Cards';

import shoppingCart from './assets/grocery-store.png';

function App() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);

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

  console.log(filter);

  return (
    <div className="app">
      <div className="header">
        <h1 onClick={handleFilter} className="title">FANCY SHOPS</h1>
      </div>
      <div className="navbar">
        <nav>
          <p onClick={handleFilter}>Electronics</p>
          <p onClick={handleFilter}>Men's Apparel</p>
          <p onClick={handleFilter}>Women's Apparel</p>
          <p onClick={handleFilter}>Jewelry</p>
        </nav>
        <div className="shopIcon-Dynamic"><img src={shoppingCart} alt="Shopping Cart Image" className="shoppingCartImg" /></div>
      </div>
      <div className="cardsContainer">
          {items.map((item) => (
            <Cards
              key = {item.id}
              image = {item.image}
              title = {item.title}
              price = {item.price}
              rating = {item.rating.rate}
              count = {item.rating.count}
            />
          ))}

      </div>
    </div>
  )
}

export default App
