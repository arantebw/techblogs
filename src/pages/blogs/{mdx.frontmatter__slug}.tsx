import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import styled, { ThemeProvider } from "styled-components";
import { device, theme } from "../../constants/theme";

const StyledMain = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  
  @media ${device.tablet} {
    padding: 24px;
  }
`;

const StyledHeader = styled.h1`
  color: ${props => props.theme.purple};
`;

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
        <StyledMain>
          <StyledHeader>{data.mdx.frontmatter.title}</StyledHeader>
          <small>{data.mdx.frontmatter.date}</small>
          <StyledDiv></StyledDiv>
          <StyledContent>
            {children}
          </StyledContent>
        </StyledMain>
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
