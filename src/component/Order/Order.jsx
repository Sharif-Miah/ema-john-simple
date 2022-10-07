import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const order = useLoaderData();
    console.log(order);
    return (
        <div>
            <h1>This is Order component section {order.length}</h1>
        </div>
    );
};

export default Order;