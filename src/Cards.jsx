import { Rating } from "@mui/material"



function Cards({ image, title, price, rating, count }) {




    return (
        <div className="singleCard">
            <img className="cardImage" src={image} alt={title} />
            <p className="cardTitle">{title}</p>
            <p className="cardPrice">${price}</p>
            <div className="starRatingContainer">
                <Rating name='half-rating-read' defaultValue={rating} precision={0.1} readOnly />
                <p className="ratingCount">({count})</p>
            </div>
            <button className="cardAddButton">Add to Cart</button>
        </div>
    )
}

export default Cards