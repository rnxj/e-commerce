import Link from "next/link";
import styles from "./header.module.scss";
const UserMenu = ({ loggedIn }) => {
    return (
        <div className={styles.menu}>
            <h4>Welcome to Shoppay !</h4>
            {loggedIn ? (
                <div className={styles.flex}>
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png?w=1480&t=st%3D1686511185~exp%3D1686511785~hmac%3Dd49ec9c8b68b72d0584c2eb8b0a6b6bc455e1aa40591570e25a37c6bdd963c66" alt="" className={styles.menu__img} />
                    <div className={styles.col}>
                        <span>Welcome Back,</span>
                        <h3>Nixon</h3>
                        <button className={styles.btn_primary} onClick={() => { }}>Sign out</button>
                    </div>
                </div>
            ) : (
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>Register</button>
                    <button className={styles.btn_outlined} onClick={() => { }}>
                        Login
                    </button>
                </div>
            )}
            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/whishlist">Whishlist</Link>
                </li>
            </ul>
        </div>
    );
}

export default UserMenu;