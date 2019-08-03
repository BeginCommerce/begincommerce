export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d460b214cf6e4e4edc120f9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-od7k61yy',
                  apiId: '4d5bf5d9-f252-4419-b628-40ae5ec0f861'
                },
                {
                  buildHookId: '5d460b2275698715f41d3b38',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-259248cy',
                  apiId: 'd51d504c-b2df-42d3-bd4a-bf7daa57e724'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/begincommerce/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-259248cy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
