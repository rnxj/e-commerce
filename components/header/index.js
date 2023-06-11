import Ad from './Ad'
import Main from './Main'
import Top from './Top'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Ad />
            <Top />
            <Main />
        </header>
    )
}

export default Header