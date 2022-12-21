import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const BlogPostPage: React.FC<PageProps> = ({ data, children }) => {

  return (
    <Layout>
      <main>
        <h1>{data.mdx.frontmatter.title}</h1>
        <small>{data.mdx.frontmatter.date}</small>
        {children}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default BlogPostPage;

export const Head: HeadFC = ({ data }) => <Seo pageTitle={data.mdx.frontmatter.title}/>
