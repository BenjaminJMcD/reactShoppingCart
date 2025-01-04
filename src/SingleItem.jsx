import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Rating } from "@mui/material";


function SingleItem({ handleAddMultiple, formatPrice }) {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        }
        fetchProduct();
      }, [id]);


    function incrementUp() {
        let input = document.getElementById("inputAmount");
        let amount = parseInt(input.value);
        input.value = amount+1;
    }

    function incrementDown() {
        let input = document.getElementById("inputAmount");
        let amount = parseInt(input.value);
        if (amount > 0) {
            input.value = amount-1
        }
    }

    console.log(loading);
    return (
        <div className="singleItemContainer">
            <Link to="/">Back</Link>
            {loading ? (
                <h1>LOADING</h1>
                ) : <>
                    <h1 className="singleTitle">{product.title}</h1>
                    <img className="singleImage" src={product.image} alt={product.title} />
                    <p className="singleDescript">{product.description}</p>
                    <p className="singlePrice">${formatPrice(product)}</p>
                    <div className="starRatingContainer">
                        <Rating name='half-rating-read' defaultValue={product.rating.rate} precision={0.1} readOnly />
                        <p className="ratingCount">{product.rating.count}</p>
                    </div>
                    <div listid={product.id} className="singleInputAddContainer">
                        <div className="incrementer">
                            <button onClick={incrementDown} className="minusBtn incrementerBtn">-</button>
                            <input id="inputAmount" type="numerical" className="amountInput" 
                            min="1"
                            defaultValue="1"
                            />
                            <button onClick={incrementUp} className="plusBtn incrementerBtn">+</button>
                        </div>
                        <button onClick={handleAddMultiple} className="cardAddButton">Add to Cart</button>  
                    </div>
                </>
            }
        </div>
    )
}

export default SingleItem;