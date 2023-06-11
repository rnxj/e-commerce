import Link from "next/link";
import { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import UserMenu from "./UserMenu";
import styles from "./header.module.scss";

const Top = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.li}>
                        <img src="https://www.seekpng.com/png/full/250-2502963_indian-flag-images-for-whatsapp-ashoka-chakra-indian.png" alt="" />
                        <span>India/INR</span>
                    </li>
                    <li className={styles.li}>
                        <MdSecurity />
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.li}>
                        <span>Customer Service</span>
                    </li>
                    <li className={styles.li}>
                        <span>Help</span>
                    </li>
                    <li className={styles.li}>
                        <BsSuitHeart />
                        <Link href="/profile/whishlist">
                            <span>Whishlist</span>
                        </Link>
                    </li>
                    <li
                        className={styles.li}
                        onMouseOver={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        {loggedIn ? (
                            <li className={styles.li}>
                                <div className={styles.flex}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png?w=1480&t=st%3D1686511185~exp%3D1686511785~hmac%3Dd49ec9c8b68b72d0584c2eb8b0a6b6bc455e1aa40591570e25a37c6bdd963c66" alt="" />
                                    <span>Nixon</span>
                                    <RiArrowDropDownFill />
                                </div>
                            </li>
                        ) : (
                            <li className={styles.li}>
                                <div className={styles.flex}>
                                    <RiAccountPinCircleLine />
                                    <span>Account</span>
                                    <RiArrowDropDownFill />
                                </div>
                            </li>
                        )}
                        {visible && <UserMenu loggedIn={loggedIn} />}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Top;