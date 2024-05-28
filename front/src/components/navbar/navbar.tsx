import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <img
        src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1716904619/henry/ecomlogo-removebg-preview_1_ekrnd2.png"
        alt="logo"
        className={styles.logo}
      />
      <ul className={styles.navlinks}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
        <li>
          <Link href="/user-dashboard">User Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
