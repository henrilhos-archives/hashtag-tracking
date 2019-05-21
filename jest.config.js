module.exports = {
  moduleDirectories: ['node_modules', 'nuxt'],
  moduleFileExtensions: ['js', 'vue'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  }
}
