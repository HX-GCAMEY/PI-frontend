"use client";

import {useRef} from "react";
import styles from "./checkout.module.css";

function Checkout() {
  const products = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBlock}>
          <span>PRODUCT</span>
        </div>
        <div className={styles.headerBlock}>
          <span>QUANTITY</span>
        </div>
        <div className={styles.headerBlock}>
          <span>PRICE</span>
        </div>
        <div className={styles.headerBlock}>
          <span>REMOVE</span>
        </div>
      </div>
      {!products.current ? (
        <div>YOUR CART IS EMPTY</div>
      ) : (
        <div>AQUI VAN LOS PRODUCTOS</div>
      )}

      <span className={styles.total}>TOTAL</span>
    </div>
  );
}

export default Checkout;
