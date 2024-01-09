"use client";
import React, { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import styles from "./CartItem.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";

function CartItem({ item }) {
  const { id, title, price, amount, category, brand } = item;
  const { decreaseAmount, increaseAmount, removeFromCart } =
    useContext(CartContext);

  return (
    <div className={styles.cartItem_main}>
      <div className={styles.cartItem}>
        <div>
          <Link href={`blog/${id}`} className={styles.photos}>
            <p> Product's Photos</p>
            <div>
              {" "}
              <FaArrowRight />
            </div>
          </Link>
        </div>
        <div>
          <h4 className={styles.title}>{title}</h4>
        </div>
        <div>
          <p className={styles.brand}>{brand}</p>
        </div>
        <div>
          <p className={styles.price}>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
        <div className={styles.quantity}>
          <button
            className={styles.quantity_button1}
            onClick={() => decreaseAmount(id)}
          >
            -
          </button>
          <span>{amount}</span>
          <button
            className={styles.quantity_button2}
            onClick={() => increaseAmount(id)}
          >
            +
          </button>
        </div>
        <div>
          <button
            className={styles.cartItem_button}
            onClick={() => removeFromCart(id)}
          >
            <AiFillDelete size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
