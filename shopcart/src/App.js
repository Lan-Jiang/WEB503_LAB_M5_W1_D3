import Header from './components/Header';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';


function App() {
  const { products } = data;
  // const [cartItems, setCartItems] = useState([]);
  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };
  /* Update quantity */
  const recalculateCart = (quantity, id) => {
    let products = this.state.products
    products.filter(item => item.id === id)[0].value = quantity
    this.setState({ products })
    console.log()
  }

  return (
    <div className="App">
      <div className='block'><Header></Header></div>
      <br></br>
      <div className="block-main">
        <Main products={products} ></Main>
      </div>
    </div>
  );
}

export default App;

//updateQuantity
//quantityTotalCalculation
