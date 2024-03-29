import '../styles/style.css'
import "../styles/stars.scss";
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Analytics/>
    </>
    )
}

export default App;