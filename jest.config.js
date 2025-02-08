module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '^@components(.*)$': '<rootDir>/components/$1',
      '^@pages(.*)$': '<rootDir>/pages/$1',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
  };
  