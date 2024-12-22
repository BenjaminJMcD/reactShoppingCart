import { Rating } from "@mui/material"
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';


export default function Cards({ shoppingCartList, setShoppingCartList, items, setItems }) {



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

    return (
        <div className="navAndCards">
            <NavBar
                handleFilter = {handleFilter}
                shoppingCartList={shoppingCartList} 
            />
            <div className="cardsContainer">
                {filteredProducts.map((item) => (
                    <div listid={item.id} key={item.id} className="singleCard">
                        <Link to={`/details/${item.id}`}>
                            <img className="cardImage" src={item.image} alt={item.title} />
                        </Link>
                        <p className="cardTitle">{item.title}</p>
                        <p className="cardPrice">${item.price}</p>
                        <div className="starRatingContainer">
                            <Rating name='half-rating-read' defaultValue={item.rating.rate} precision={0.1} readOnly />
                            <p className="ratingCount">{item.rating.count}</p>
                        </div>
                        <button onClick={handleAdd} className="cardAddButton">Add to Cart</button>
                    </div>
                ))}{ }
            </div>
        </div>
    )
}

