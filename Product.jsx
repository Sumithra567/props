// src/components/Product.jsx
import React from 'react';

const Product = ({ title, price, inStock }) => (
  <div style={{ border: '1px solid #aaa', padding: 10, marginBottom: 10 }}>
    <h4>{title}</h4>
    <p>Price: ${price.toFixed(2)}</p>
    <p>{inStock ? 'Available' : 'Out of Stock'}</p>
  </div>
);

export default Product;
