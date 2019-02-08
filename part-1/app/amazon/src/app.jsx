import React, { Component } from 'react';
import { connect } from "react-redux"
import { addItemToCart } from './actions';

// CART 

function Cart(props) {
  return (
    <p>Cart (<span>{props.amount} $</span>)</p>
  );
}

export const ConnectedCart = connect(
  (state) => ({
    amount: state.amount
  }),
  null
)(Cart);

// ITEM

function Item (props) {
  function handleClick(evt) {
    props.dispatch(addItemToCart());
  }
  
  return (
    <span>Dan Abramov - Autobiography <button onClick={handleClick}>Add one item to cart</button></span>
  );
}

export const ConnectedItem = connect(
  null,
  null
)(Item);


// ********************************************* //
// ******************* APP ********************* //
// ********************************************* //

export class App extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Amazon!</p>
        <img alt="amazon" src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png" />
        <br />
        <ConnectedItem />
        <ConnectedCart />
      </div>
    );
  }
}