import React from 'react';

export default function Product(props) {
  const { product} = props;
  return (
    <div>
      <h3>{product.desc}</h3>
      <img className="small" src={product.image} alt={product.name} />
      <div className='select-quantity'><span><input className= "item" class="form-control" type="number" value="0" min="0" onChange={(event) => props.recalculateCart(event.target.value, props.id)}></input> quantity</span></div>
    </div>
  );
}


