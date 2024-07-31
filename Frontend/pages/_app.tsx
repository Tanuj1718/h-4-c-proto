'use client'
import { AppProps } from 'next/app';
import '../src/app/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="container mx-auto p-4">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
