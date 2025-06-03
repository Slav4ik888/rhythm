export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/transform-runtime",
    "@babel/plugin-transform-modules-commonjs"
    // "babel-plugin-transform-import-meta"
  ]
}
