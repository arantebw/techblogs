import * as React from "react";
import useSiteMetadata from "../../hooks/useSiteMetadata";

type Props = {
  pageTitle: string;
};

const Seo = ({ pageTitle }: Props) => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <title>{siteTitle} &middot; {pageTitle}</title>
  );
};

export default Seo;
