import '../styles/index.css'
import '../styles/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title key="title">Polis Chain | Ecosystem </title>

        <meta
          key="description"
          name="description"
          content="Explore the Polis Chain ecosystem"
        />

        <meta name="application-name" content="Polis Chain | Ecosystem" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Polis Chain | Ecosystem" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3E4A94" />

        <meta key="twitter:card" name="twitter:card" content="app" />
        <meta key="twitter:title" name="twitter:title" content="Polis Chain | Ecosystem" />
        <meta
          key="twitter:url"
          name="twitter:url"
          content="https://ecosystem.polis.tech"
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="Explore the Polis Chain ecosystem"
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://ecosystem.polis.tech/manifest-icon-192.png"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@PolisChain"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:site_name"
          property="og:site_name"
          content="Polis Chain | Ecosystem"
        />
        <meta key="og:url" property="og:url" content="https://ecosystem.polis.tech" />
        <meta
          key="og:image"
          property="og:image"
          content="https://ecosystem.polis.tech/apple-icon-180.png"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Explore the Polis Chain ecosystem"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
