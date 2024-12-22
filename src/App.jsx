import { useState, useEffect } from 'react'
import Cards from './Cards';
import SingleItem from './SingleItem';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {

  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">FANCY SHOPS</h1>
      </div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Cards shoppingCartList={shoppingCartList}
            setShoppingCartList={setShoppingCartList}
            items={items}
            setItems={setItems} />} />
            <Route path="/details/:id" element={<SingleItem
            shoppingCartList={shoppingCartList}
            setShoppingCartList={setShoppingCartList}/>} /> 
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
