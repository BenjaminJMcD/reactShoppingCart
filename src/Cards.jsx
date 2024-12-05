


function Cards({ image, descript, price}) {



    return (
        <>
            <img src={image} alt={descript} />
            <p>{price}</p>
            <button>Add to Cart</button>
        </>
    )
}

export default Cards