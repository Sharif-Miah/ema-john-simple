import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shops.css';

const Shops = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storeCart = getStoreCart();
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);
        }

    }, [])

    const handleAddToCart = (product) => {
        const getCart = [...cart, product]
        setCart(getCart)
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