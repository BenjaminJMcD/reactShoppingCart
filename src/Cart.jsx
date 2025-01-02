import { Link } from "react-router-dom";
import { Rating } from "@mui/material";


function Cart({ shoppingCartList, setShoppingCartList, total, handleChange, add, subtract, formatPrice }) {


    function formatSubtotal(item) {
        let subtotal = item.price * item.count;
        let formattedSubtotal = subtotal.toFixed(2);
        return formattedSubtotal;
    }



    return (
        <div className="cartItemsContainer">
            <Link className="styledLink" to="/">GO BACK</Link>
            {shoppingCartList.map((item) => (
                <div className="cartItem" listid={item.id} key={item.id}>
                    <img className="cartImage" src={item.image} alt={item.title} />
                    <p className="cartTitle">{item.title}</p>
                    <p className="cartPrice">${formatPrice(item)}</p>
                    <div className="starRatingContainer">
                        <Rating name='half-rating-read' defaultValue={item.rating.rate} precision={0.1} readOnly />
                        <p className="ratingCount">{item.rating.count}</p>
                    </div>
                    <div className="incrementer">
                        <button className="minusBtn incrementerBtn" 
                            onClick={subtract}>-</button>
                        <input type="numerical" className="amountInput" 
                            value={item.count}
                            onChange={handleChange}
                        />
                        <button className="plusBtn incrementerBtn" onClick={add}>+</button>
                    </div>
                    <div className="subTotal">
                        <h1>$ {formatSubtotal(item)}</h1>
                    </div>
                    <button className="cartRemove">Remove All</button>
                </div>
            ))}
        </div>
    )
};

export default Cart;

/* ------ TO DO --------

- SUBTOTAL ALWAYS HAS 2 DECIMALS

- REMOVE ALL BUTTON REMOVES ITEM FROM SHOPPINGLISTCART W POPUP MODAL "ARE YOU SURE"

- SHOPPINGCARTLIST STORED IN LOCAL STORAGE


*/ 