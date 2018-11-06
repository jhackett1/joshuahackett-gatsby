module.exports = {
  siteMetadata: {
    title: 'Joshua Hackett',
    description: 'User-centred design and development',
    strapline: "Hello, I'm <strong>Joshua Hackett</strong>, an experience designer and developer",
    copyrightNotice: '© Joshua Hackett 2018',
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
    ]
  },
  plugins: [
    // Sass support
    `gatsby-plugin-sass`,
    // Process markdown files
    `gatsby-transformer-remark`,
    // Manage document head
    `gatsby-plugin-react-helmet`,
    // CMS
    `gatsby-plugin-netlify-cms`,
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
    // Favicon
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/logo.svg",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    // Work with netlify
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.ttf": [
            "Access-Control-Allow-Origin: *",
            "Content-Type: application/font-ttf",
          ],
        }
      }
    },
    // Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-91311733-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
