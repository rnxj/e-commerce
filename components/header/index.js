import Ad from './Ad'
import Main from './Main'
import Top from './Top'
import styles from './header.module.scss'

const Header = ({ country }) => {
    return (
        <header className={styles.header}>
            <Ad />
            <Top country={country} />
            <Main />
        </header>
    )
}

export default Header