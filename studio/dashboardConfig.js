export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cdf243d75a462bafc6f95ce',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3k956iqo',
                  apiId: '437ff21a-07b5-4fe3-bcc7-c1afa37c3bc4'
                },
                {
                  buildHookId: '5cdf243d75a4621a1e6f95a1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-65i19bx2',
                  apiId: '64ccf0c7-3215-4292-a2cd-3c2020e71a5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nephlin7/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-65i19bx2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
