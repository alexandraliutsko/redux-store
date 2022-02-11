import React from "react";
import {connect} from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTrash, faPlusCircle, faCircleMinus} from "@fortawesome/free-solid-svg-icons";

import "./shopping-cart-table.css";

library.add(faTrash, faCircleMinus, faPlusCircle);

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-sm float-right">
            <FontAwesomeIcon icon={ faTrash } />
          </button>
          <button onClick={() => onIncrease(id)} className="btn btn-outline-success btn-sm float-right">
            <FontAwesomeIcon icon={ faPlusCircle } />
          </button>
          <button onClick={() => onDecrease(id)} className="btn btn-outline-warning btn-sm float-right">
            <FontAwesomeIcon icon={ faCircleMinus } />
          </button>
        </td>
      </tr>
    )
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>

      <table className="table">
        <thead>
        <tr>
          <td>#</td>
          <td>Item</td>
          <td>Count</td>
          <td>Price</td>
          <td>Action</td>
        </tr>
        </thead>

        <tbody>
        {
          items.map(renderRow)
        }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => console.log("increase", id),
    onDecrease: (id) => console.log("decrease", id),
    onDelete: (id) => console.log("delete", id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
