import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product, handleRemoveItem }) => {
    // console.log(product);
    const { id, name, price, shipping, img, quantity } = product;
    return (
        <div className='review-container'>
            <img src={img} alt="" />
            <div className='review-content'>
                <div className='single-item'>

                    <p>{name}</p>
                    <p>Price<small>{price}</small></p>
                    <p><small>Shipping Charge: {shipping}</small></p>
                    <p>Quantity:<small> {quantity}</small></p>
                </div>
                <div className='delate-btn'>

                    <button onClick={() => handleRemoveItem(id)}>
                        <TrashIcon />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default ReviewItem;