import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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

const BlogPostPage: React.FC<PageProps> = (query) => {
  const { data, children } = query;
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledMainPostView>
          <StyledH1>{data.mdx.frontmatter.title}</StyledH1>
          <small>{data.mdx.frontmatter.date}</small>
          <GatsbyImage
            image={heroImage}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_photoby
        hero_image {
          childImageSharp {
            gatsbyImageData(height:400)
          }
        }
      }
    }
  }
`;

export default BlogPostPage;

export const Head: HeadFC = ({ data }) => <Seo pageTitle={data.mdx.frontmatter.title}/>
