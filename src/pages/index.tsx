import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {};

const headingStyles = {};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Billy Arante's Techblogs
        </h1>
      </main>
      <footer>
        <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
          <img alt="Creative Commons License" style={{borderWidth: "0"}} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
        </a>
        <br />
        This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
      </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Billy Arante's Techblogs</title>
