import React, { ReactNode } from 'react';
import Dashnav  from '../dashnav';

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Dashnav />
      {children}
    </div>
  );
};

export default DashboardLayout;
