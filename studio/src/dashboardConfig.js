export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e97d6f2bac2e3bb6ec42097',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3eh84k5m',
                  apiId: '8321fda0-8ce0-4c0c-b868-db3ca1a906dd'
                },
                {
                  buildHookId: '5e97d6f336c5e9540f59acef',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2oy8zuxn',
                  apiId: '1d43a8fc-500d-4fb4-a972-b8c1f9d2cba4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TxusBlack/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2oy8zuxn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
