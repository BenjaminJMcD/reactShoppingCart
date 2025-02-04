import { Link } from "react-router-dom";
import { Rating } from "@mui/material";


function Cart({ shoppingCartList, handleChange, add, subtract, formatPrice, removeItem }) {


    function formatSubtotal(item) {
        let subtotal = item.price * item.count;
        let formattedSubtotal = subtotal.toFixed(2);
        return formattedSubtotal;
    }

    function grandTotal() {
        return shoppingCartList.reduce((total, item) => total + (item.price * item.count), 0).toFixed(2);
    }

    let GrandTotal = grandTotal();



    return (
        <div className="xs:w-[350px] sm:w-[450px] sm:mx-auto mt-header pb-6">
            {shoppingCartList.map((item) => (
                <div className="grid xs:grid-cols-[150px_200px] sm:grid-cols-[150px_300px] grid-rows-[100px_20px_40px] py-4 border-b border-navy xs:w-[350px] sm:w-[450px] mt-2" listid={item.id} key={item.id}>
                    <Link className="col-span-1 row-span-3" to={`/details/${item.id}`}>
                        <img className="h-[160px] mx-auto object-contain" src={item.image} alt={item.title} />
                    </Link>
                    <Link className="my-auto mx-[5px]" to={`/details/${item.id}`}>
                        <p className="text-center font-bold align-items-center ml-2">{item.title}</p>
                    </Link>
                    <p className="flex justify-self-end mr-2 mb-2">${formatPrice(item)}</p>
                    <div className="flex xs:gap-2 sm:gap-4 justify-self-end" listid={item.id}>
                        <div className="inline-flex items-center border-black border-solid border-2 rounded-lg h-[27px] mt-[9px]">
                            <button
                                className="font-bold pl-2"
                                onClick={subtract}>-</button>
                            <p className="w-[25px] text-center p-0">{item.count}</p>
                            <button
                                className="font-bold pr-1"
                                onClick={add}>+</button>
                        </div>
                        <div className="mt-[12px] font-bold">
                            <h1>${formatSubtotal(item)}</h1>
                        </div>
                        <button
                            className="h-[36px] py-1 border border-black px-2 rounded-xl bg-navy text-white hover:bg-white hover:text-navy mt-1"
                            onClick={removeItem}>
                                Delete
                        </button>
                    </div>
                </div>
            ))}
            <h1 className="flex font-bold justify-self-end mt-4 mr-2">Total: ${GrandTotal}</h1>
        </div>
    )
};

export default Cart;
