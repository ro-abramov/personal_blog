module.exports = {
    siteMetadata: {
        title: `Ruslan Abramov personal blog`,
        description: `My collection of thoughts receips and stuff like that`,
        author: `@ro_abramov`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        // Images configuration
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ro_abramov-blog`,
                short_name: `roa_blog`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        // Blog posts
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/pages/blog`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            linkImagesToOriginal: false,
                            withWebp: { quality: 80 },
                        },
                    },
                ],
            },
        },
        // Videos

        {
            resolve: `gatsby-transformer-yaml`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `videos`,
                path: `${__dirname}/src/pages/videos`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pastProjects`,
                path: `${__dirname}/src/pages/past-projects`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
