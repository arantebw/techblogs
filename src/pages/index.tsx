import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {};

const headingStyles = {};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Billy Arante's Techblogs
      </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Billy Arante's Techblogs</title>
