import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { AppRoute } from '../../const/const';


function Header() {
    return (
        <header className={styles.header}>
            <NavLink
                to="/"
                className={props => `${props.isActive ? styles.active : ''} ${styles.navLink} ${styles.logoLink}`}
            >
                <Logo />
            </NavLink>
            <nav>
                <NavLink
                    to={AppRoute.ROOT}
                    className={props => `${props.isActive ? styles.active : ''} ${styles.navLink}`
                    }
                >
                    Главная
                </NavLink>
                <NavLink
                    to={AppRoute.CHAT}
                    className={props => `${props.isActive ? styles.active : ''} ${styles.navLink}`
                    }
                >
                    Чат
                </NavLink>
                <NavLink
                    to={AppRoute.HELP}
                    className={props => `${props.isActive ? styles.active : ''} ${styles.navLink}`}
                >
                    Помощь
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
