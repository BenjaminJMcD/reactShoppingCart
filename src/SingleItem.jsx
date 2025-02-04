import { useParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from 'react';
import { Rating } from "@mui/material";
import Loading from "./Loading";


function SingleItem({ handleAddMultiple, formatPrice }) {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [mobile, setMobile] = useState(false);

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

    useEffect(() => {
      const checkMobile = () => {
        if (window.innerWidth < 550) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }, []);


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

    function dynamicHeight() {
        const dynamicText = document.querySelector(".dynamic-text");
        const dynamicTextHeight = dynamicText.offsetHeight
        if (dynamicTextHeight > 160) {
            dynamicText.style.fontSize = "12px";
        }
        requestAnimationFrame(dynamicHeight);
    }

    requestAnimationFrame(dynamicHeight);


    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
            <div>
                {mobile ? (
                <div className="mt-[150px] mx-auto">
                    <div className="inline-flex px-4 justify-between">
                        <h1 className="font-extrabold text-[12px] pr-1">{product.title}</h1>
                        <div className="inline-flex my-auto pr-2">
                            <Rating name='half-rating-read' defaultValue={product.rating.rate} precision={0.1} readOnly size="small" />
                            <p className="ml-1 pt-[1px] text-[12px]">{product.rating.count}</p>
                        </div>
                    </div>
                    <p className=" mx-4 text-[12px] my-1">{product.description}</p>              
                    <img className=" object-contain px-6 py-4" src={product.image} alt={product.title} />
                    <div className="inline-flex px-6 w-[100vw] justify-end mb-4">
                        <p className="font-extrabold justify-self-end mt-[15px]">${formatPrice(product)}</p>
                        <div listid={product.id} className="">
                            <div className="inline-flex items-center border-black border-solid mx-auto border-2 rounded-lg mt-3 ml-4">
                                <button onClick={incrementDown} className="font-bold pl-2 ">-</button>
                                <input id="inputAmount" type="numerical" className="w-[25px] text-center justify-center p-0"
                                min="1"
                                defaultValue="1"
                                />
                                <button onClick={incrementUp} className="font-bold pr-1 ">+</button>
                            </div>
                            <button onClick={handleAddMultiple} className="h-[36px] py-1 ml-4 border border-black p-2 rounded-xl bg-navy text-white hover:bg-white hover:text-navy">Add to Cart 
                            </button>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="grid grid-cols-[1fr_1fr] grid-rows-[350px_100px] mx-20 mt-[210px] max-w-[830px] mx-auto">                
                        <img className="sm:col-span-1 object-contain sm:row-span-2 sm:h-[400px] sm:justify-self-center pt-3" src={product.image} alt={product.title} />
                        <div className="place-self-center pb-5">
                            <h1 className="mx-6 pt-10 pb-2 font-extrabold sm:text-[16px] xs:text-[12px]">{product.title}</h1>
                            <p className=" mx-6 dynamic-text">{product.description}</p>
                            <div className="flex col-span-2 justify-center pt-4 mr-2">
                                <Rating name='half-rating-read' defaultValue={product.rating.rate} precision={0.1} readOnly />
                                <p className="ml-1 pt-[1px]">{product.rating.count}</p>
                            </div>
                        </div>
                        <div className="inline-flex justify-self-end gap-4">
                            <p className="font-extrabold mt-[15px]">${formatPrice(product)}</p>
                            <div listid={product.id} className="text-center">
                                <div className="inline-flex items-center border-black border-solid mx-auto border-2 rounded-lg mt-3 mr-4">
                                    <button onClick={incrementDown} className="font-bold pl-2 ">-</button>
                                    <input id="inputAmount" type="numerical" className="w-[25px] text-center justify-center p-0"
                                    min="1"
                                    defaultValue="1"
                                    />
                                    <button onClick={incrementUp} className="font-bold pr-1 ">+</button>
                                </div>
                                <button onClick={handleAddMultiple} className="h-[36px] py-1 mr-4
                                border border-black p-2 rounded-xl  bg-navy text-white hover:bg-white hover:text-navy">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>)}
        </div>
    )
}

export default SingleItem;