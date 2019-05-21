import 'jest-dom/extend-expect'
import { render } from 'vue-testing-library'
import Toolbar from './../../../nuxt/components/Toolbar'

const testUtils = require('../test-utils')

describe('Test the Toolbar', () => {
  beforeAll(() => {
    return testUtils.initialize()
  })

  test('It should render Toolbar', () => {
    const { queryByTestId } = render(Toolbar)

    expect(queryByTestId('title')).toHaveTextContent('Hashtag Tracking')
    expect(queryByTestId('about')).toHaveTextContent('Sobre')
  })
})
