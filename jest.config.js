module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['dist'],
  transform: {
    // esbuild-jest throws some errors when working with reflection
    '^.+\\.ts?$': 'ts-jest',
  },
}
