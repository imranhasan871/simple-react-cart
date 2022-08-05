import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
  const first10 = fakeData.slice(0, 10);
  const [products] = useState(first10);

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <h3>Hello Shoping Cart</h3>
      </div>
    </div>
  );
}

export default Shop;
