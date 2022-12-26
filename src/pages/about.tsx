import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles.css";
import { StyledMain } from "../styles";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <StyledMain>
        <h1>About Me</h1>
        <p>
          Hi, I'm Billy a nerdy computer programmer, contributes to
          open-source software projects, works as a freelance full-stack web
          developer, and maintains my personal tech blog during my leisure
          hours.
        </p>
        <p>
          If I'm not doing those things mentioned above, I love to watch animes
          and movies on Netflix, play NBA2K on PS4 gaming console, go on road
          trips with my motorcycle together with friends, and read books on
          various genres.
        </p>
      </StyledMain>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo pageTitle="About" />;
