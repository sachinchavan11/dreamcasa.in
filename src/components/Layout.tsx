// components/Layout.tsx

import React, { ReactNode } from 'react';
import Navbar from '../../src/components/navbar';
import Footer from '../../src/components/Footer';
interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
