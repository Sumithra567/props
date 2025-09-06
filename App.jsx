// src/App.jsx
import React, { useState } from 'react';
import Profile from './components/Profile';
import Product from './components/Product';
import Card from './components/Card';
import ChildA from './components/counter/ChildA';
import ChildB from './components/counter/ChildB';

export default function App() {
  const [counter, setCounter] = useState(0);

  const profiles = [
    { name: 'Alice', age: 28, location: 'New York' },
    { name: 'Bob', age: 34, location: 'London' },
  ];

  const products = [
    { title: 'Laptop', price: 999.99, inStock: true },
    { title: 'Mouse', price: 19.99, inStock: false },
    { title: 'Keyboard', price: 49.99, inStock: true },
  ];

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Profile Cards</h2>
      {profiles.map((p, idx) => <Profile key={idx} {...p} />)}

      <h2>Product Listings</h2>
      {products.map((p, idx) => <Product key={idx} {...p} />)}

      <h2>Reusable Card Examples</h2>
      <Card><p>This is some text inside a card.</p></Card>
      <Card><img src="/react logo.webp" alt="Placeholder" /></Card>
      <Card><button onClick={() => alert('Button in Card clicked!')}>Click Me</button></Card>

      <h2>Shared Counter (Lifting State Up)</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <ChildA counter={counter} />
      <ChildB counter={counter} />
    </div>
  );
}
