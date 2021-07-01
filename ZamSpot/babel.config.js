module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/',
          },
          {
            rootPathSuffix: './src/components',
            rootPathPrefix: '@components',
          },
          {
            rootPathSuffix: './src/containers',
            rootPathPrefix: '@containers',
          },
          {
            rootPathSuffix: './src/assets',
            rootPathPrefix: '@assets',
          },
          {
            rootPathSuffix: './src/stylesheets',
            rootPathPrefix: '@stylesheets',
          },
        ],
      },
    ],
  ],
};
