import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    // console.log(order);

    return (
        <div className='shop-container'>
            <div className="order-container">
                <div>
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product} />)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Order;