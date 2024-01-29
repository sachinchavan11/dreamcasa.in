import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Your+Font+Here&display=swap"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
