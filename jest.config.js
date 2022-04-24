module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
    "\\.(gif|jpg|png|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // required in order for the styleMock proxy to work.
  // @see https://github.com/keyz/identity-obj-proxy/issues/9#issuecomment-439625933
  globals: {
    "ts-jest": {
      tsconfig: {
        esModuleInterop: true,
      },
    },
  },
};
