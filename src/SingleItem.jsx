import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Rating } from "@mui/material";
import NavBar from "./NavBar";


function SingleItem({ shoppingCartList, setShoppingCartList }) {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
        };
    
        fetchProduct();
      }, [id]);

    function handleAdd(e) {
        let amount = e.target.parentNode.firstChild.value;
        if (amount == "") {
            amount = 1;
        }
        for (let i=0; i<amount; i++) {
            let newCart = shoppingCartList
            newCart.push(product);
            setShoppingCartList(newCart);
        }
        console.log(shoppingCartList);
    }

    return (
        <div className="singleItemContainer">
            <Link to="/">Back</Link>
            {product.title && (
                <>
                    <h1 className="singleTitle">{product.title}</h1>
                    <img className="singleImage" src={product.image} alt={product.title} />
                    <p className="singleDescript">{product.description}</p>
                    <p className="singlePrice">${product.price}</p>
                    <div className="starRatingContainer">
                        <Rating name='half-rating-read' defaultValue={product.rating.rate} precision={0.1} readOnly />
                        <p className="ratingCount">{product.rating.count}</p>
                    </div>
                    <div className="singleInputAddContainer">
                        <input className="singleCartInput"
                        type="number"
                        placeholder="1"
                        min="1" 
                        inputMode="numeric" 
                        />
                        <button onClick={handleAdd} className="cardAddButton">Add to Cart</button>  
                    </div>
                </>
            )}
        </div>
    )
}

export default SingleItem;