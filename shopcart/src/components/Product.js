import React from 'react';

export default function Product(props) {
  const { product} = props;
  return (
    <div>
      <h3>{product.desc}</h3>
      <img className="small" src={product.image} alt={product.name} />
      <div>{product.value}<span> quantity</span></div>
    </div>
  );
}


