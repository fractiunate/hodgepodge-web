import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const DesktopLayout: React.FC<LayoutProps> = ({ children, header, footer }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {header}
      <main className="">{children}</main>
      {footer}
    </div>
  )
};

export default DesktopLayout;