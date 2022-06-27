import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Atrable`,
    siteUrl: `https://www.atrable.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Atrable Website`,
        short_name: `Atrable`,
        start_url: `/`,
        background_color: `#705df2`,
        theme_color: `#705df2`,
        display: `standalone`,
        icon: `src/images/appIconRounded.png`,
      },
    },
  ],
};

export default config;
