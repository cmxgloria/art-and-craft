import React from "react";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";
import { createStructuredSelector } from "reselect";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartDropdown);
