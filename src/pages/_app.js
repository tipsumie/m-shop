
import '../styles/globals.css'
import Head from 'next/head';
import { MainLayout } from '@/components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>M Shop</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
