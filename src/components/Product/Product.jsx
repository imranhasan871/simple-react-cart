import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>This is a Product</h1>
      <h6>{props.product.name}</h6>
    </div>
  );
}

export default Product;
