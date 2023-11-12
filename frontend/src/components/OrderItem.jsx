
import React from 'react';

function OrderItem({ product }) {
    return (
        <div style={{ border: "2px solid black" }}>
            <h5>{product.name}</h5>
            <p>{`Price: $${product.price}`}</p>
        </div>
    );
}

export default OrderItem;
