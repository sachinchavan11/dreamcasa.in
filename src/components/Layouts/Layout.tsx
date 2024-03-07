// components/Layout.tsx

import React, { ReactNode } from 'react';
import Navbar from '../navbar';
import Footer from '../Footer';
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
