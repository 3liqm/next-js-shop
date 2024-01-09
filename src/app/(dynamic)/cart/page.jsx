"use client";
import CartItem from "@/components/cartItem/CartItem";
import React, { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, total, clearCart } = useContext(CartContext);

  const handleCheckout = () => {};

  return (
    <div className={styles.cart_main}>
      <h1 className={styles.title}>Your Shopping Cart</h1>
      <div className={styles.address}>
        <p>Products</p>
        <p>Title</p>
        <p>Brand</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Clear</p>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className={styles.cart_summary}>
        <div className={styles.total}>
          <h2>Cart Total</h2>
          <p>Total: <span>${total}</span></p>
          <p>Shopping Fee: <span>Free</span></p>
          <div className={styles.cart_buttons}>
            <button className={styles.button} onClick={handleCheckout}>
              Checkout
            </button>
            <button className={styles.button} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
        <div className={styles.promo}>
          <p>If you have a promo code, Enter it here</p>
          <div className={styles.promo_enter}>
            <input placeholder="code promo" type="text" />
            <button className={styles.button}>Subment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
