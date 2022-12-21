import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Billy Arante's Techblogs",
    description: "Babbling about computer programming, open-source software, web development, and life.",
    siteUrl: "https://techblogs.gatsbyjs.io"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "blogs",
        "path": `${__dirname}/blogs/`
      }
    }
  ]
};

export default config;
