module.exports = wallaby => {
  return {
    files: ['src/**/*.ts', 'src/test/mocks/**/*', '!src/**/*.spec.ts'],
    tests: ['src/**/*.spec.ts'],
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  }
}
