import * as React from "react";
import "../styles.css";
import Layout from "../components/Layout";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>List of my posts</h1>
        <ul>
          {data.allFile.nodes.map(node => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blogs"}}) {
      nodes {
        name
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle="Home" />;
