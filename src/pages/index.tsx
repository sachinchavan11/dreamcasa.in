import Image from 'next/image';
import { Inter } from 'next/font/google';
import App from './_app';
import Homepage from '@/components/Homepage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <div>
    <Homepage />
  </div>;
}
