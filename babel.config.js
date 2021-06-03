module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          src: './src',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        whitelist: ['API_URL'],
      },
    ],
  ],
};
