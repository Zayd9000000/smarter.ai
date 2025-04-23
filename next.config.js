module.exports = {
  // ... other config options
  
  // Add script to head
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '</static/js/preload-handler.js>; rel=preload; as=script',
          },
        ],
      },
    ]
  },

  // Ensure our script is included in the build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups.preload = {
        test: /preload-handler\.js$/,
        name: 'preload',
        enforce: true,
        priority: 10,
      };
    }
    return config;
  },
} 