import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products} = props;
  return (
    <main className="block-main">
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} ></Product>
        ))}
      </div>
    </main>
  );
}