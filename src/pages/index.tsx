import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles.css";

const StyledMain = styled.main`
  min-width: 500px;
  max-width: 50%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <StyledMain>
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
      </StyledMain>
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
