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

    

    function getOffsetHeight() {
        setTimeout(() => {
            const dynamicText = document.querySelector(".dynamic-text");
            const dynamicTextHeight = dynamicText.offsetHeight;
            if (dynamicTextHeight > 200) {
                dynamicText.style.fontSize = "12px";
            }
        }, 100)
    }

    getOffsetHeight();

    return (
        <div className="grid grid-cols-[1fr_0.5fr_0.5fr] grid-rows-[20px_100px_200px_50px_50px] mx-20 mt-10 max-w-[830px] mx-auto">
            <Link className="col-span-3" to="/">Back</Link>
            {loading ? (
                <h1>LOADING</h1>
                ) : <>
                    <img className="col-span-1 row-span-4 h-[400px] justify-self-center pt-3" src={product.image} alt={product.title} />
                    <h1 className="col-span-2 text-center pt-10 font-extrabold mx-auto place-self-end">{product.title}</h1>
                    <p className="col-span-2 place-self-center mx-3 dynamic-text">{product.description}</p>
                    <div className="flex col-span-2 justify-center pt-4">
                        <Rating name='half-rating-read' defaultValue={product.rating.rate} precision={0.1} readOnly />
                        <p className="ml-2">{product.rating.count}</p>
                    </div>
                    <p className="font-extrabold justify-self-end mt-[15px]">${formatPrice(product)}</p>
                    <div listid={product.id} className="text-center">
                        <div className="inline-flex items-center border-black border-solid mx-auto border-2 rounded-lg mt-3 mr-4">
                            <button onClick={incrementDown} className="font-bold pl-2 ">-</button>
                            <input id="inputAmount" type="numerical" className="w-[25px] text-center justify-center p-0" 
                            min="1"
                            defaultValue="1"
                            />
                            <button onClick={incrementUp} className="font-bold pr-1 ">+</button>
                        </div>
                        <button onClick={handleAddMultiple} className="h-[36px] py-1 border border-black p-2 rounded-xl  bg-navy text-white hover:bg-white hover:text-navy">Add to Cart</button>  
                    </div>
                </>
            }
        </div>
    )
}

export default SingleItem;