import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { AuthProvider } from '../utils/authContext';
import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress';

const showProgressBar = (delay) => {
  const timer = setTimeout(() => NProgress.start(), delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

const stopProgress = (timer) => {
  clearTimeout(timer);
  NProgress.done();
};

Router.events.on('routeChangeStart', () => showProgressBar(300));

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
        <title>Intelligent Crazy People</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
