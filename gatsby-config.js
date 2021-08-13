module.exports = {
  siteMetadata: {
    title: "Harvard ASAP",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmail.us5.list-manage.com/subscribe/post?u=96b96c85c298fa647b6b92426&amp;id=340feae0d6', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
