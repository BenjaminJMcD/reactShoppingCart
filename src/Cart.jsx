import { Link } from "react-router-dom";
import { Rating } from "@mui/material";


function Cart({ shoppingCartList, setShoppingCartList }) {






    return (
        <div className="cartItemsContainer">
            <Link className="styledLink" to="/">GO BACK</Link>
            {shoppingCartList.map((item, index) => (
                <div className="cartItem" listid={item.id} key={item.id}>
                    <img className="cartImage" src={item.image} alt={item.title} />
                    <p className="cartTitle">{item.title}</p>
                    <p className="cartPrice">${item.price}</p>
                    <div className="starRatingContainer">
                        <Rating name='half-rating-read' defaultValue={item.rating.rate} precision={0.1} readOnly />
                        <p className="ratingCount">{item.rating.count}</p>
                    </div>
                    <div className="cartIncrementer">
                        <button className="cartMinusBtn incrementerBtn">-</button>
                        <input type="numerical" className="cartAmountInput" 
                        value={item.count}
                        min="1"
                        />
                        <button className="cartPlusBtn incrementerBtn">+</button>
                    </div>

                    <button className="cartRemove">Remove Item</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;