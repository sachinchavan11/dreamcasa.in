import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Layout from '@/components/Layouts/Layout';
import Dashboard from './dashboard';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const isDashboard = Component === Dashboard;
  console.log('hiihihi', isDashboard);
  return (
    <SessionProvider session={session}>
      {isDashboard ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Layout>
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Your+Font+Here&display=swap"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
}
