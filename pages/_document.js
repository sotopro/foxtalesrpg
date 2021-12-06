import Document, { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../lib/fpixel'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="facebook-domain-verification" content={process.env.NEXT_DOMAIN_VERIFICATION} />
        <meta content="FoxTalesRPG" name="author" />
        <meta content="website" property="og:type" />
        <meta content="FoxTalesRPG" property="og:site_name" />
        <meta content="FoxTalesRPG" name="apple-mobile-web-app-title" />
        <meta content="FoxTalesRPG" name="application-name" />
        <meta content="#37946e" name="msapplication-TileColor" />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <link
            rel="preload"
            href="/fonts/Pixeled.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}