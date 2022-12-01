import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Billy Arante's Techblogs</title>;
