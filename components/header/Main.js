import Link from "next/link";
import { FaOpencart } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import styles from "./header.module.scss";

const Main = () => {
    const { cart } = useSelector((state) => ({ ...state }));
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <Link href="/">
                    <span className={styles.logo}>
                        <img src="../../../logo.png" alt="" />
                    </span>
                </Link>
                <form onSubmit={() => { }} className={styles.search}>
                    <input
                        type="text"
                        placeholder="Search..."
                    />
                    <button type="submit" className={styles.search__icon}>
                        <RiSearch2Line />
                    </button>
                </form>
                <Link href="/cart">
                    <span className={styles.cart}>
                        <FaOpencart />
                        <span>{cart.cartItems.length}</span>
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Main;