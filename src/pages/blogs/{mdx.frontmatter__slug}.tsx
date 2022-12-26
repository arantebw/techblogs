import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

import { device, theme } from "../../constants/theme";
import { StyledH1, StyledMainPostView } from "../../styles";

// Container of the hero banner
const StyledDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 20%);

  @media ${device.tablet} {
    height: 400px;
  }
`;

const StyledContent = styled.section`
  & p {
    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    padding: 0 24px;
  }
`;

const BlogPostPage: React.FC<PageProps> = ({ data, children }) => {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledMainPostView>
          <StyledH1>{data.mdx.frontmatter.title}</StyledH1>
          <small>{data.mdx.frontmatter.date}</small>
          <StyledDiv></StyledDiv>
          <StyledContent>
            {children}
          </StyledContent>
        </StyledMainPostView>
      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
      }
    }
  }
`;

export default BlogPostPage;

export const Head: HeadFC = ({ data }) => <Seo pageTitle={data.mdx.frontmatter.title}/>
