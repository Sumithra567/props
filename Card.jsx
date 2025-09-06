
import React from 'react';

const Card = ({ children }) => (
  <div style={{ border: '2px dashed #888', padding: 15, marginBottom: 10 }}>
    {children}
  </div>
);

export default Card;
