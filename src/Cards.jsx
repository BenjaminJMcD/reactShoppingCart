import { Rating } from "@mui/material"



function Cards({ listid, image, title, price, rating, count, handleAdd, viewSingleItem }) {




    return (
        <div listid={listid} className="singleCard">
            <img onClick={viewSingleItem} className="cardImage" src={image} alt={title} />
            <p className="cardTitle">{title}</p>
            <p className="cardPrice">${price}</p>
            <div className="starRatingContainer">
                <Rating name='half-rating-read' defaultValue={rating} precision={0.1} readOnly />
                <p className="ratingCount">({count})</p>
            </div>
            <button onClick={handleAdd} className="cardAddButton">Add to Cart</button>
        </div>
    )
}

export default Cards