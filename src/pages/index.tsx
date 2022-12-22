import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles.css";
import { theme } from "../constants/theme";

const StyledMain = styled.main`
  min-width: 500px;
  max-width: 50%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
`;

const StyledDivLeft = styled.div`
  width: 30%;
  height: 150px;
  flex-basis: auto;
  background-color: rgba(0, 0, 0, 20%);
`;

const StyledDivRight = styled.div`
  width: 70%;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  & > p {
    font-size: 0.8rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.purple};
  text-decoration: none;
  vertical-align: middle;

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledMain>
          <h1>List of My Blogs</h1>
          {
            data.allMdx.nodes.map(node => (
              <StyledArticle key={node.id}>
                <StyledDivLeft></StyledDivLeft>
                <StyledDivRight>
                  <h2>
                    <StyledLink to={`/blogs/${node.frontmatter.slug}`}>
                      {node.frontmatter.title}
                    </StyledLink>
                  </h2>
                  <p>{node.excerpt}</p>
                </StyledDivRight>
              </StyledArticle>
            ))
          }
        </StyledMain>
      </Layout>
    </ThemeProvider>
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
