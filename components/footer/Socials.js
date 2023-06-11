import {
    BsInstagram,
    BsPinterest,
    BsSnapchat,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import styles from "./footer.module.scss";
const Socials = () => {
    return (
        <div className={styles.footer__socials}>
            <section>
                <h3>STAY CONNECTED</h3>
                <ul>
                    <li>
                        <a href="/" target="_blank">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <BsInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <BsTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <BsYoutube />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <BsPinterest />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <BsSnapchat />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank">
                            <FaTiktok />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Socials;