import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
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
