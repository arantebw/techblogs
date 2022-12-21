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
          {
            data.allMdx.nodes.map(node => (
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
              </article>
            ))
          }
        </ul>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        excerpt
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle="Home" />;
