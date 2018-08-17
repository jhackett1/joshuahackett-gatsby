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
        label: 'About',
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}
