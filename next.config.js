const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? 'https://cdn.rawgit.com/weareinfinite/weareinfinite.github.io/5e97e48d' : '',
    webpack:(config, {buildId, dev}) => {
        
          return config
        
    },
    exportPathMap: function() {
        return {
            '/': { page: '/'}
        }
    },
}