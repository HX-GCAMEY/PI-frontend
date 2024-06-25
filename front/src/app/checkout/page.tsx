import {useRef} from "react";
import styles from "./checkout.module.css";

function Checkout() {
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
    </div>
  );
}

export default Checkout;
