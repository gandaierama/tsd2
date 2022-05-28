import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import Head from "next/head";
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
  <>

      
    <Script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossOrigin="anonymous"/>

<Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous"/>

<Script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossOrigin="anonymous"/>

<Script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossOrigin="anonymous"/>

    <Component {...pageProps} />
  </>
  )
}

export default MyApp
