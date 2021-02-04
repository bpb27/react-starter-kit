module.exports = {
  presets: ['@babel/env', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src',
        },
      },
    ],
    '@babel/transform-runtime',
  ],
};
