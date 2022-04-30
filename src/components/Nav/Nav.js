import styles from './Nav.module.scss';

function Nav() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img className={styles.logo} src="../../../images/logo/salogo.svg" /> 
                </div>
                <div className={styles.listContainer}>
                    <ul>
                        <li><a className={styles.coolLink} href="#our_story">OUR STORY</a></li>
                        <li><a className={styles.coolLink} href="#couple">BRIDE&amp;GROOM</a></li>
                        <li><a className={styles.coolLink} href="#gallery">GALLERY</a></li>
                        <li><a className={styles.coolLink} href="#function">WHEN &amp; WHERE</a></li>
                    </ul>
                </div>
                <div />
            </div>
        </div>
    )
}

export default Nav
