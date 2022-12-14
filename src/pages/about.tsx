import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "../styles.css";
import { StyledH1, StyledMainPostView } from "../styles";
import { device, theme } from "../constants/theme";

const StyledP = styled.p`
  @media ${device.tablet} {
    padding: 0 24px;
  }
`;

const AboutPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <StyledMainPostView>
          <StyledH1>About Me</StyledH1>
          <StyledP>
            Hi, I'm Billy a nerdy computer programmer, contributes to
            open-source software projects, works as a freelance full-stack web
            developer, and maintains my personal tech blog during my leisure
            hours.
          </StyledP>
          <StyledP>
            If I'm not doing those things mentioned above, I love to watch animes
            and movies on Netflix, play NBA2K on PS4 gaming console, go on road
            trips with my motorcycle together with friends, and read books on
            various genres.
          </StyledP>
        </StyledMainPostView>
      </Layout>
    </ThemeProvider>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo pageTitle="About" />;
