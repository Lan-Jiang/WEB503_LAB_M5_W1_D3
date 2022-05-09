import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <header className="block header center">
      <div>
        <a href="#/">
          <h1>Shop to React</h1>
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{this.props.sum}</span><a href="#/cart">items</a>
      </div>
    </header>
  );
}