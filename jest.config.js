module.exports = {
  moduleDirectories: ['node_modules', 'nuxt', 'server'],
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(vuetify))/'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/tests/server/__tests__/components/',
    '<rootDir>/tests/nuxt/__tests__/components/'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue']
}
