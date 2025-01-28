import { Rating } from "@mui/material"
import { Link } from 'react-router-dom';


function Cards({ filteredProducts, handleAdd, formatPrice }) {
  

    return (
        <div className="flex flex-col items-center justify-center bg-white pt-6 mt-header xs:mt-[138px] sm:mt-header pb-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 place-items-center max-w-7xl ">
                {filteredProducts.map((item) => (
                    <div listid={item.id} key={item.id} className="xs:w-[350px] sm:w-[450px] sm:h-[250px] grid xs:grid-cols-[170px_180px] sm:grid-cols-[200px_250px] grid-rows-[175px_75px]
                    bg-[#FFFFFF]
                    border border-black md:rounded-xl  hover:shadow-2xl">
                        <Link to={`/details/${item.id}`} className="col-span-1 row-span-4">
                            <img className="row-span-2 object-contain xs:w-[170px] sm:w-[200px] h-[240px] py-[10px]" src={item.image} alt={item.title} />
                        </Link>
                        <div className="my-auto pr-[14px] pt-[25px]">
                            <Link to={`/details/${item.id}`} className="text-center">
                                <p >{item.title}</p>
                            </Link>
                            <div className="flex justify-center pt-2 mr-2">
                                <Rating name='half-rating-read' defaultValue={item.rating.rate} precision={0.1} readOnly />
                                <p className="ml-1 pt-[1px]">{item.rating.count}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-self-end pr-[18px]">
                            <Link to={`/details/${item.id}`}>
                                <p className="font-bold pt-7 pl-9">${formatPrice(item)}</p>
                            </Link>
                            <div listid={item.id} className="pt-5">
                                <button onClick={handleAdd} className="h-[36px] py-1 border border-black p-2 rounded-xl  bg-navy text-white hover:bg-white hover:text-navy">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;