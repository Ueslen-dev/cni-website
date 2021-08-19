import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>CNI - Website</title>
        <link rel="shortcut icon" href="/img/icon-512.svg" />
        <link rel="apple-touch-icon" href="/img/icon-512.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJs and Styled Components"
        />
      </Head>
      <ConfigProvider locale={ptBR}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
};

export default App;
