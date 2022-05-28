import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AlertBase from '../components/AlertBase/AlertBase'
import NavbarBase from '../components/NavbarBase/NavbarBase'
export default function Home() {
  return (
    <div>
              <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>contato</title>
    </Head>
    <NavbarBase />
    <AlertBase title="Title" text="Text" type="danger"/>

    <div className={styles.container}>

      <main className={styles.main}>
            
            
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
    </div>
  )
}
