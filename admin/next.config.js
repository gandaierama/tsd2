module.exports = {
    productionBrowserSourceMaps: true,
    serverRuntimeConfig: {
        secret: 'secretKeyTSDa1b9c5@!DDDD'
    },
    publicRuntimeConfig: {
        backUrl:process.env.NODE_ENV === 'development'
            ? 'http://localhost:3200' // development api
            : 'http://api.tsdmotoboys.com.br', // production api,
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://admin.tsdmotoboys.com.br/api' // production api
    },
    api: {
    responseLimit: false,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          
          {
            key: "Access-Control-Allow-Origin",
            value: '/:path*',
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Access-Control-Allow-Origin",
          },
        ],
      },
    ];
  },
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'http://api.tsdmotoboys.com.br/:path*',
          },
          {
            source: '/:path*',
            destination: 'http://api.tsdmotoboys.com.br/:path*',
          },
        ]
      },
}