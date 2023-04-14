module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  resetMocks: false,
  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  collectCoverage: false,
  coveragePathIgnorePatterns: ["node_modules"],
  coverageDirectory: "<rootDir>/coverage/",
  coverageReporters: ["lcov", "json"],
};
