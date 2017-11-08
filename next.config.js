module.exports = {
    webpack:(config, {buildId, dev}) => {
        
          return config
        
    },
    exportPathMap: function() {
        return {
            '/': { page: '/'}
        }
    }
}