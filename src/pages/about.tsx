import * as React from "react";
import "../styles";
import Layout from "../components/Layout";
import { HeadFC, PageProps } from "gatsby";
import Seo from "../components/Seo";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>About me</h1>
      </main>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo pageTitle="About" />;
