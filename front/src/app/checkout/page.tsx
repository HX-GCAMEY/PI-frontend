import styles from "./checkout.module.css";
import CartComponent from "@/components/cartComponent";

function Checkout() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBlock}>
          <span>PRODUCT</span>
        </div>

        <div className={styles.headerBlock}>
          <span>PRICE</span>
        </div>
        <div className={styles.headerBlock}>
          <span>REMOVE</span>
        </div>
      </div>
      <CartComponent />
    </div>
  );
}

export default Checkout;
