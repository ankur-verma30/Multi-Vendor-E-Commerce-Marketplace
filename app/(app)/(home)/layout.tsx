"use client";
import Navbar from "./navbar";
import FooterPage from "./footerpage";

interface LayoutProps {
    children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
       <div className="flex-1 bg-[#f4f4f0]">
         {children}
       </div>
        <FooterPage/>
  
    </div>
  )
}

export default Layout;