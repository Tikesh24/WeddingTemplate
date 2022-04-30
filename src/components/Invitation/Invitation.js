import styles from './Invitation.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
function Invitation() {
    return (
        <div className={styles.container} id="gallery">
            <img src="../../../images/background/invite.jpeg" />
        </div>
    )
}

export default Invitation
