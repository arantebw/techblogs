import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import { graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles.css";
import { StyledH1, StyledMain } from "../styles";
import { device, theme } from "../constants/theme";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media ${device.tablet} {
    flex-direction: row;
    column-gap: 16px;
  }
`;

const StyledDivLeft = styled.div`
  width: 100%;
  flex-basis: auto;
  background-color: rgba(0, 0, 0, 20%);

  @media ${device.tablet} {
    width: 40%;
  }

  @media ${device.laptopLarge} {
    width: 30%;
  }
`;

const StyledDivRight = styled.div`
  width: 100%;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  & > p {
    font-size: 1rem;
  }

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.laptopLarge} {
    width: 70%;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.purple};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledMain>
          <StyledH1>List of My Blogs</StyledH1>
          {
            data.allMdx.nodes.map(node => (
              <StyledArticle key={node.id}>
                <StyledDivLeft>
                  <Link to={`/blogs/${node.frontmatter.slug}`}>
                    <GatsbyImage
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.hero_image_alt}
                    />
                  </Link>
                </StyledDivLeft>
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
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
        id
        excerpt
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo pageTitle="Home" />;
