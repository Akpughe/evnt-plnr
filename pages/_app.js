import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { AuthProvider } from '../utils/authContext';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <title>Intelligent Crazy People</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
