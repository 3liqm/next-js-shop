"use client";
import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { links } from "./data";
import Logo from "../elements/logo/Logo";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { RiMenu3Line } from "react-icons/ri";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CartContext } from "@/Context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemAmount } = useContext(CartContext);

  return (
    <div className={styles.app__navbar}>
      <div>
        <Logo />
      </div>

      <ul
        className={`${styles.app__navbar_links} ${isOpen ? styles.open : ""}`}
      >
        {links.map((link) => (
          <li
            className={`${styles.app__flex} ${styles.p__text}`}
            key={`link-${link.id}`}
          >
            <Link href={link.url} onClick={() => setIsOpen(false)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.navbar_icons}>
        <div className={styles.cart_main}>
          <Link href="/cart">
            <HiMiniShoppingBag size={34} />
          </Link>
          <div className={styles.cart_amount}>{itemAmount}</div>
        </div>
        <div className={styles.app__navbar_menu}>
          <RiMenu3Line
            color="white"
            size={12}
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <div>
              <HiX color="white" size={10} onClick={() => setIsOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
