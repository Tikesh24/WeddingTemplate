import ImageGallery from 'react-image-gallery';
import styles from './MyGallery.module.scss';

const images = [
    {
        original: '../../../images/background/bg1.jpg',
        thumbnail: '../../../images/background/bg1.jpg',
    },
    {
        original: '../../../images/background/bg2.jpg',
        thumbnail: '../../../images/background/bg2.jpg',
    },
    {
        original: '../../../images/background/bg3.jpg',
        thumbnail: '../../../images/background/bg3.jpg',
    },
    {
        original: '../../../images/background/bg4.jpg',
        thumbnail: '../../../images/background/bg4.jpg',
    },
    {
        original: '../../../images/background/bg6.jpg',
        thumbnail: '../../../images/background/bg6.jpg',
    },
    {
        original: '../../../images/background/bg7.jpg',
        thumbnail: '../../../images/background/bg7.jpg',
    },
    {
        original: '../../../images/background/bg8.jpg',
        thumbnail: '../../../images/background/bg8.jpg',
    },
    {
        original: '../../../images/background/bg9.jpeg',
        thumbnail: '../../../images/background/bg9.jpeg',
    },
    {
        original: '../../../images/background/bg91.jpeg',
        thumbnail: '../../../images/background/bg91.jpeg',
    }
];

const MyGallery = () => {
    return (
        <div id="gallery">
            <div className={styles.container} >
                <ImageGallery items={images} />
            </div>
        </div>
    )
}

export default MyGallery;