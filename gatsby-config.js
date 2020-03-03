/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-153601665-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
      }
    },
  ],
  siteMetadata: {
    title: "Circular Triangle",
    titleTemplate: "%s",
    description: "Circular Triangle is a non-profit organization that inspires and enables the transition to a local circular economy in the Triangle through advocacy, education, and cross-sector collaboration, creating a cleaner environment and resilient communities.",
    url: "https://circulartriangle.org",
    image: "/img/logo.png"
  }
}