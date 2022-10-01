import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quentity = 0;
    for (const product of cart) {
        quentity = quentity + product.quentity;
        total = total + product.price * product.quentity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3 className='order-summary'>Order Summary:</h3>
            <div className='cart-text-right'>
                <p>Selected Items: {quentity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping} </p>
                <p>Tax: ${tax} </p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;