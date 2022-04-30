import styles from './Landing.module.scss';
import Timmer from './../Timmer/Timmer';

const Landing = () => {
  return (
    <>
      <div className={styles.container} id="our_story" >
        <div className={styles.bg1} />
        <div className={styles.cover}>
          <img className={styles.image} src="../../../images/logo/name3.png" />
          <div className={styles.timmerFixed}>
              <Timmer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;