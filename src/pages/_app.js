import '@/styles/style.css'
import "@/styles/stars.scss";
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
    )
}
