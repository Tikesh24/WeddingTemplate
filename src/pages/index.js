import Landing from '../components/Landing'
import WeddingLocation from '../components/WeddingLocation/WeddingLocation';
import MyGallery from '../components/MyGallery/MyGallery';
import Invitation from '../components/Invitation/Invitation';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.scss'
import Nav from '../components/Nav/Nav';
import Couples from '../components/Couples/Couples';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shashank&amp;Asha</title>
        <link rel="icon" href="/images/logo/salogo.svg" />
        <link
          rel="preload"
          href="/fonts/flor-font/Rochester-73E4.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="description" content="Wedding gram!!"
        ></meta>
      </Head>
      <div className={styles.container}>
        <Nav />
        <Landing />
        <Couples />
        <MyGallery />
        <WeddingLocation/>
        {/* <Invitation /> */}
        <Footer />
      </div>
    </>

  )
}
