import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
