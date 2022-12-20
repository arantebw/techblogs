import * as React from "react";
import "../styles.css";
import Layout from "../components/Layout";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <section>
          <h3>Post #1</h3>
          <p>The quick brown fox jumps over the lazy dog near the river bank.</p>
        </section>
        <section>
          <h3>Post #2</h3>
          <p>The quick brown fox jumps over the lazy dog near the river bank.</p>
        </section>
        <section>
          <h3>Post #3</h3>
          <p>The quick brown fox jumps over the lazy dog near the river bank.</p>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Billy Arante's Techblogs</title>;
