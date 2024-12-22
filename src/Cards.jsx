import { Rating } from "@mui/material"
import { useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Cards({ filteredProducts, handleAdd }) {
  




    return (
        <div className="navAndCards">
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

