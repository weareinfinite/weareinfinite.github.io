const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? 'https://raw.githubusercontent.com/weareinfinite/weareinfinite.github.io/master' : '',
    webpack:(config, {buildId, dev}) => {
        
          return config
        
    },
    exportPathMap: function() {
        return {
            '/': { page: '/'}
        }
    },
}