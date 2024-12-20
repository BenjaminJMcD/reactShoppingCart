import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Rating } from "@mui/material";

function SingleItem() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
        };
    
        fetchProduct();
      }, [id]);

      console.log(product);

      return (
        <div className="singleItemContainer">
            {product.title && (
                <>
                    <h1 className="singleTitle">{product.title}</h1>
                    <p className="singleDescript">{product.description}</p>
                    <img className="singleImage" src={product.image} alt={product.title} />
                    <p className="singlePrice">${product.price}</p>
                    <div className="starRatingContainer">
                        <Rating name='half-rating-read' defaultValue={product.rating.rate} precision={0.1} readOnly />
                        <p className="ratingCount">{product.rating.count}</p>
                    </div>
                </>
            )}
        </div>
      )


}

export default SingleItem;