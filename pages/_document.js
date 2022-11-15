// Compiles all HTML elements. Customizr entire HTML document.

import Document, { Html, Head, Main, NextScript } from 'next/document'

// Head here is not the same as Head in _app.js. That one can be used anywhere. The one here can only be used in this document

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content='A site for my programming portfolio' />
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='viewport' content='width=device-width' />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
          <link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' rel='stylesheet' />
        </Head>
        <body id="overlays">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;