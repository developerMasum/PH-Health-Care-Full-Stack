
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import Footer from "../../components/shared/Footer/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
