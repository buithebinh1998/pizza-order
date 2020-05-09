module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['./src/setupTests.js'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/assetMock.js',
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/'
    ],
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coveragePathIgnorePatterns: [
      '^.+\\.story\\.js$',
      '^.+\\.proptypes\\.js$',
      '^.+\\.route\\.js$',
      './src/modules/Route/index.js$',
      './src/setupTests.js'
    ],
    coverageThreshold: {
      global: {
        statements: 95,
        branches: 94,
        functions: 95,
        lines: 95,
      },
    },
  };
  