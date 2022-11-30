import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import "../styles.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
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

export default IndexPage;

export const Head: HeadFC = () => <title>Billy Arante's Techblogs</title>;
