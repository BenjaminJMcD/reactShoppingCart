import { Link } from "react-router-dom";
import { Rating } from "@mui/material";


function Cart({ shoppingCartList, setShoppingCartList }) {

    // AMOUNT IN CART - NO DUPS --- CHANGE COUNT FUNCTION HERE. 

    function consolidateItems() {

    }

    // TOTAL $$$




    return (
        <div className="cartItemsContainer">
            <Link className="styledLink" to="/">GO BACK</Link>
            {shoppingCartList.map((item, index) => (
                <div className="cartItem" listid={item.id} key={item.id}>
                    <img className="cartImage" src={item.image} alt={item.title} />
                    <p className="cartTitle">{item.title}</p>
                    <p className="cartDescript">{item.description}</p>
                    <p className="cartPrice">${item.price}</p>
                    <div className="starRatingContainer">
                        <Rating name='half-rating-read' defaultValue={item.rating.rate} precision={0.1} readOnly />
                        <p className="ratingCount">{item.rating.count}</p>
                    </div>
                    <input className="cartInput"
                        type="number"
                        min="1" 
                        inputMode="numeric" 
                    />
                    <button className="cartRemove">Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Cart