import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTrash, faPlusCircle, faCircleMinus} from "@fortawesome/free-solid-svg-icons";

import "./shopping-cart-table.css";

library.add(faTrash, faCircleMinus, faPlusCircle);

const ShoppingCartTable = () => {
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
        <tr>
          <td>1</td>
          <td>Site Reliability Engineering</td>
          <td>2</td>
          <td>$40</td>
          <td>
            <button className="btn btn-outline-danger btn-sm float-right">
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="btn btn-outline-success btn-sm float-right">
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <button className="btn btn-outline-warning btn-sm float-right">
              <FontAwesomeIcon icon={faCircleMinus} />
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <div className="total">
        Total: $201
      </div>
    </div>
  )
}

export default ShoppingCartTable;
