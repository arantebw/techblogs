import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  pageTitle: string;
};

const Seo = ({ pageTitle }: Props) => {
  const siteMetaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title: siteTitle } = siteMetaData.site.siteMetadata;

  return (
    <title>{siteTitle} &middot; {pageTitle}</title>
  );
};

export default Seo;
