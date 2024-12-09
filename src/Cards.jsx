


function Cards({ image, title, price}) {



    return (
        <>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
            <button>Add to Cart</button>
        </>
    )
}

export default Cards