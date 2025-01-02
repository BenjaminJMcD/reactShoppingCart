import { Rating } from "@mui/material"
import { Link } from 'react-router-dom';


function Cards({ filteredProducts, handleAdd, formatPrice }) {
  

    return (
        <div className="navAndCards">
            <div className="cardsContainer">
                {filteredProducts.map((item) => (
                    <div listid={item.id} key={item.id} className="singleCard">
                        <Link to={`/details/${item.id}`}>
                            <img className="cardImage" src={item.image} alt={item.title} />
                        </Link>
                        <p className="cardTitle">{item.title}</p>
                        <p className="cardPrice">${formatPrice(item)}</p>
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

export default Cards;