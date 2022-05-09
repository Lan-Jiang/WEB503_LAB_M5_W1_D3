import React from 'react';

export default function Header(props) {
  return (
    <header className="block header center">
      <div>
        <a href="#/">
          <h1>Shop to React</h1>
        </a>
      </div>
      <div>
        <img src="./public/products/logo192.png"></img>
        <a href="#/cart">items</a>
      </div>
    </header>
  );
}