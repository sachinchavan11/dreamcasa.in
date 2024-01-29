import Image from 'next/legacy/image';
import { Inter } from 'next/font/google';
import App from './_app';
import Homepage from '@/components/Homepage';
import SEO from '@/components/SEO';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <SEO
        title="DreamCasa - Your Real Estate Property listing"
        description="Right Path for Dream home,Explore our premium real estate services. Find your dream home with DreamCasa, your trusted Property listing."
        keywords="Real estate, DreamCasa, Dream home, Property listing,Properties around hyderabad"
      />
      <Homepage />
    </div>
  );
}
