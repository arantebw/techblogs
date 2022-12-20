import { PageProps } from "gatsby";
import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
