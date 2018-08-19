module.exports = {
  siteMetadata: {
    title: 'Joshua Hackett',
    description: 'User-centred design and development',
    strapline: "Hello, I'm <strong>Joshua Hackett</strong>, a user-centred designer and developer",
    copyrightNotice: 'Joshua Hackett 2018',
    email: 'hello@joshuahackett.com',
    menu: [
      {
        label: 'Projects',
        href: '/projects'
      },
      {
        label: 'Blog',
        href: '/blog'
      },
      {
        label: 'About me',
        href: '/about'
      },
      {
        label: 'Hire me',
        href: '/smallwins'
      },
    ],
    twitter: 'dinosaurenby'
  },
  plugins: [
    // Sass support
    `gatsby-plugin-sass`,
    // Process markdown files
    `gatsby-transformer-remark`,
    // Manage document head
    `gatsby-plugin-react-helmet`,
    // Support Medium
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@dinosaurlord`,
      },
    },    
    // Import project .md files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./projects`,
        name: "projects",
      },
    },
    // Import post .md files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./posts`,
        name: "posts",
      },
    },
  ],
}
