import { useState, useEffect } from 'react'
import Cards from './Cards';
import fetchItems from './fetchItems';
import shoppingCart from './assets/grocery-store.png';

function App() {

  const [itemList, setItemList] = useState([]);

  
  const items = fetchItems();

  console.log(items);



  return (
    <div className="app">
      <div className="header">
        <h1 className="title">FANCY SHOPS</h1>
      </div>
      <div className="navbar">
        <nav>
          <h3>Electronics</h3>
          <h3>Men's Apparel</h3>
          <h3>Women's Apparel</h3>
          <h3>Cart Placeholder</h3>
        </nav>
        <div className="shopIcon-Dynamic"><img src={shoppingCart} alt="Shopping Cart Image" className="shoppingCartImg" /></div>
      </div>
      <div className="cardsContainer">

          {items.map((item) => (
            <Cards
              image = {item.image}
              title = {item.title}
              price = {item.price}
            />
          ))}

      </div>
    </div>
  )
}

export default App
