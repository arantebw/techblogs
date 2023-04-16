import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { device, theme } from "../../constants/theme";
import { StyledH1, StyledMainPostView } from "../../styles";

const S = {
  Dates: styled.section`
    display: flex;
    justify-content: space-between; 
    color: gray;
  `,
  StyledDiv: styled.div`
    width: 100%;
    height: 200px;
    background-color: rgba(0, 0, 0, 20%);

    @media ${device.tablet} {
      height: 400px;
    }
  `,
  StyledContent: styled.section`
    line-height: 2;

    & p {
      margin-bottom: 16px;
    }

    & > ul {
      padding-left: 1rem;
    }

    @media ${device.tablet} {
      padding: 0 24px;
    }
  `,
  PhotoCredit: styled.section`
    color: gray;
    font-size: smaller;

    & > a {
      color: gray;
    }
  `,
}

interface BlogPostPageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        hero_image: string;
        hero_image_alt: string;
        hero_image_credit_photoby: string;
        hero_image_credit_link: string;
      }
    }
  };
  children: JSX.Element;
}

// Container of the hero banner
const BlogPostPage: React.FC<PageProps> = (query) => {
  const { data, children } = query;
  const heroImage = getImage(data.mdx.frontmatter.hero_image);
  const {
    last_update,
    hero_image_credit_photoby,
    hero_image_credit_link,
  } = data.mdx.frontmatter;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledMainPostView>
          <StyledH1>{data.mdx.frontmatter.title}</StyledH1>
          <S.Dates>
            <small>{`Published: ${data.mdx.frontmatter.date}`}</small>
            {last_update && (<small>{`Updated: ${data.mdx.frontmatter.last_update}`}</small>)}
          </S.Dates>
          <GatsbyImage
            image={heroImage}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <S.PhotoCredit>
            {`Photo by ${hero_image_credit_photoby} on `}
            <a href={hero_image_credit_link}>Unsplash</a>
          </S.PhotoCredit>
          <S.StyledContent>
            {children}
          </S.StyledContent>
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
        date(formatString: "MMMM DD, YYYY")
        last_update(formatString: "MMMM DD, YYYY")
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
