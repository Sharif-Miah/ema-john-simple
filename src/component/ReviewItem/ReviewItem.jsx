import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    console.log(product);
    const { name, price, shipping, img, quantity } = product;
    return (
        <div className='review-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;