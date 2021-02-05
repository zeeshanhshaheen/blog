module.exports = {
    async redirects() {
      return [
        {
          source: '/2019/11/13/app-module-vs-core-module-vs-shared-module-vs-feature-modules-in-angular',
          destination: '/posts/app-core-shared-feature-modules',
          permanent: true,
        },
        {
          source: '/2016/10/13/arches-national-park-canyon-lands-national-park-utah-september-2016',
          destination: '/posts/arches-national-park-canyonlands-utah',
          permanent: true,
        },
        {
          source: '/2017/06/15/backpacking-the-lost-coast-trail',
          destination: '/posts/backpacking-lost-coast',
          permanent: true,
        },        
        {
          source: '/2020/12/09/experience-backpacking-the-trans-catalina-trail-avalon-to-two-harbors',
          destination: '/posts/backpacking-trans-catalina-trail-california',
          permanent: true,
        },
        {
          source: '/2020/07/27/must-have-vs-code-extensions-for-angular-typescript',
          destination: '/posts/must-have-vscode-extensions',
          permanent: true,
        },
      ]
    },
  }