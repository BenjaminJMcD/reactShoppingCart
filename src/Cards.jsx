import { Rating } from "@mui/material"
import { useState, useEffect } from "react";
import NavBar from "./NavBar";


function Cards() {

    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState(null);
    const [shoppingCartList, setShoppingCartList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const list = await response.json();
        setItems(list);
      }
      fetchData();
    }, []);

    function handleAdd(e) {

    }

    function handleFilter(e) {

    }

    console.log(items)

    return (
        <div className="navAndCards">
            <NavBar
                handleFilter = {handleFilter}
                shoppingCartList={shoppingCartList} 
            />
            <div className="cardsContainer">
                {items.map((item) => (
                    <div key={item.id} className="singleCard">
                        <img className="cardImage" src={item.image} alt={item.title} />
                        <p className="cardTitle">{item.title}</p>
                        <p className="cardPrice">${item.price}</p>
                        <div className="starRatingContainer">
                            <Rating name='half-rating-read' defaultValue={item.rating.rate} precision={0.1} readOnly />
                            <p className="ratingCount">{item.rating.count}</p>
                        </div>
                        <button onClick={handleAdd} className="cardAddButton">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;