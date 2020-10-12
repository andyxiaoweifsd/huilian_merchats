module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                  require('postcss-pxtorem')({
                    browsers: ['Android >= 4.0', 'iOS >= 8'],
                    rootValue: 37.5,
                    propList: ['*'],
                  }),
                ]
              }
        }
    },
};