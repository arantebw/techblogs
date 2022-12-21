import * as React from "react";
import "../styles.css";
import Layout from "../components/Layout";
import { HeadFC, Link, PageProps } from "gatsby";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <main>
        <h1>List of My Blogs</h1>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blogs/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>{node.excerpt}</p>
            </article>
          ))
        }
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
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle="Home" />;
