// import React from 'react';
// import Product from './Product';

// export default function Main(props) {
//   const { products} = props;
//   return (
//     <main className="block-main">
//       <div>
//         {products.map((product) => (
//           <Product key={product.id} product={product} ></Product>
//         ))}
//       </div>
//     </main>
//   );
// }

import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Main(props) {
    return (
            
    <div className='border px-4 py-2'>
        <section>
        <ul>
          {props.products.map(product => (
              <li key={product.id} value={product.value} className="d-block d-sm-inline">           
                <h5 className='col-lg-2 text-left'>{product.desc}</h5>
                <div className='d-block d-flex align-items-center'>
                    <img src={product.image} alt={product.desc} width="150" />
                    <input 
                        className='col-md-1 mx-4'
                        type="number" 
                        defaultValue={product.value}
                        min="0"
                        // onChange={(event) => props.handleQuantityChange(event.target.value, props.id)}
                        onChange={(event) => props.handleQuantityChange(event.target.value, props.id)}
                    ></input>
                    <span>quantity</span>
                </div>
              </li>
            ))}
        </ul>
        </section>
    </div>
    );
}
 
export default Main;