module.exports = {
    // Other configuration options
    images: {
        unoptimized: true
      },    
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
        }
    }
}