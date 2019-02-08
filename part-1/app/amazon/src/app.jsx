import React, { Component } from 'react';
import { connect } from "react-redux"
import { addItemToCart } from './actions';
import uuid from "uuid/v4";

// CART 

function Cart(props) {
  return (
    <>
      <p>Cart (<span>{props.amount} $</span>)</p>
      <ul>
        {
          props.items.map(item => {
            return <li key={item.id}>{item.name} - {item.price}$</li>
          })
        }
      </ul>
    </>
  );
}

export const ConnectedCart = connect(
  (state) => ({
    amount: state.amount,
    items: state.items
  }),
  null
)(Cart);

// ITEM

function Item (props) {
  function handleClick(event) {
    event.stopPropagation();

    props.dispatch(addItemToCart(uuid(), "Dan Abramov - Autobiography", 1));
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