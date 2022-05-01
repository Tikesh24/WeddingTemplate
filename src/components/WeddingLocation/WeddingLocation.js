import styles from './WeddingLocation.module.scss';
import {FaMapMarkerAlt} from 'react-icons/fa';
function WeddingLocation() {
    return (
        <div  id="function" >
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>When &amp; Where</h1>
                </div>

                <div className={styles.content}>
                    <div>
                        <h1>Ceremony</h1>
                        <p>Wednesday, 11, May, 2022</p>
                        <h4>Haldi &diams; Mehendi &diams; Baraat Prasthan <a href="https://goo.gl/maps/z74Jjox4t8o6yeyn6" target="_blank" title="Thakur Palace | Go to map"><FaMapMarkerAlt /></a></h4>
                        <div className={styles.brline} />
                    </div>
                    <div>
                        <h1>Reception</h1>
                        <p>12:00 PM - 4:00 PM, Thursday, 12, May, 2022</p>
                        <h4>Reception <a href="https://goo.gl/maps/z74Jjox4t8o6yeyn6" target="_blank" title="Thakur Palace | Go to map"><FaMapMarkerAlt /></a></h4>
                        <div className={styles.brline} />
                    </div>
                    <div>
                        <h1>Location</h1>
                        <h4>Thakur Palace  <a href="https://goo.gl/maps/z74Jjox4t8o6yeyn6" target="_blank" title="Thakur Palace | Go to map"><FaMapMarkerAlt /></a></h4>
                        <p>Professor Colony, Raipur, Chhattisgarh 492001</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeddingLocation
