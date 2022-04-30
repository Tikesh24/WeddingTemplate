import styles from './Couples.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Couples = () => {
  return (
    <div className={styles.container} id="couple">
        <div className={styles.card}>
            <div className={styles.border}>
                <img className={styles.image} src="../../../images/background/dp1.jpeg" alt="Groom" />
            </div>
            <div>
                <h3 className={styles.title}>SHASHANK <br/><span className={styles.lastname}>BANCHHOR</span></h3>
                {/* <p className={styles.para}>Banchhor</p> */}
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/shashank410/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.facebook.com/shashank.banchhor" target="_blank"><FaFacebook /></a>
                </div>
            </div>
        </div>
        <div className={styles.lovelogo}>
            <img src="../../../images/logo/salogo.svg" alt="lovebirds" />
        </div>
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <div className={styles.border}>
                    <img className={styles.image} src="../../../images/background/dp2.jpeg" alt="Bride" />
                </div>
                <div class="bride-border-box">
                    <span class="bride-groom-border"></span>
                    <span class="bride-groom-border"></span>
                    <span class="bride-groom-border"></span>
                    <span class="bride-groom-border"></span>
                </div>
            </div>
            <div>
                <h3 className={styles.title}>ASHA <br/><span className={styles.lastname}>VERMA</span></h3>
                {/* <p className={styles.para}>Verma</p> */}
                <div className={styles.icons}>
                    <a href="https://www.instagram.com/asha.verma.5/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.facebook.com/asha.verma.5" target="_blank"><FaFacebook /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Couples;