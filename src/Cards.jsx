


function Cards({ image, title, price}) {



    return (
        <div className="singleCard">
            <img className="cardImage" src={image} alt={title} />
            <p className="cardTitle">{title}</p>
            <p className="cardPrice">${price}</p>
            <button className="cardAddButton">Add to Cart</button>
        </div>
    )
}

export default Cards