import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css';

const Shops = () => {
    const products = useLoaderData();

    const [cart, setCart] = useState([])


    useEffect(() => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quentity = storeCart[id];
                addedProduct.quentity = quentity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)

    }, [products])

    const handleAddToCart = (product) => {
        let newCart = []
        const exists = cart.find(otherProduct => otherProduct.id === product.id)
        if (!exists) {
            product.quentity = 1;
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(otherProduct => otherProduct.id !== product.id);
            exists.quentity = exists.quentity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className="shop-container">
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shops;