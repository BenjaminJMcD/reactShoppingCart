import { Rating } from "@mui/material"
import { Link } from 'react-router-dom';


function Cards({ filteredProducts, handleAdd, formatPrice }) {
  



    return (
        <div className="flex-none">
            <div className="container">
                {filteredProducts.map((item) => (
                    <div listid={item.id} key={item.id} className="w-[450px] grid grid-cols-4 grid-rows-4 border border-black rounded-xl m-10 p-3 hover:shadow-2xl">
                        <Link to={`/details/${item.id}`} className="col-span-2 row-span-4">
                            <img className="h-52 w-52 pt-2" src={item.image} alt={item.title} />
                        </Link>
                        <Link to={`/details/${item.id}`} className="col-span-2 row-span-2 text-center content-center ml-4">
                            <p >{item.title}</p>
                        </Link>
                        <div className="flex col-span-2 justify-center pt-8">
                            <Rating name='half-rating-read' defaultValue={item.rating.rate} precision={0.1} readOnly />
                            <p className="ratingCount">{item.rating.count}</p>
                        </div>
                        <Link to={`/details/${item.id}`}>
                            <p className="font-bold pt-8 pl-9">${formatPrice(item)}</p>
                        </Link>
                        <div className="pt-5">
                            <button onClick={handleAdd} className="bg-green-300 h-[36px] py-1 border border-black p-2 rounded-xl shadow">Add to Cart</button>
                        </div>
                    </div>
                ))}{ }
            </div>
        </div>
    )
}

export default Cards