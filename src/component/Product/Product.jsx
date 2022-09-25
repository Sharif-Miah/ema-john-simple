import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {

    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart-text'>
                <p className='product-name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='ratings'>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='button-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;