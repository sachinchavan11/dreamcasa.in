import React from 'react';
import Head from 'next/head';

interface SeoProps {
  title: any;
  description: any;
  keywords: any;
}

const SEO = ({ title, description, keywords }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
};

export default SEO;
