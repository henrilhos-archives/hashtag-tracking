import 'jest-dom/extend-expect'
import { render } from 'vue-testing-library'
import TweetDisplay from './../../../nuxt/components/TweetDisplay'

const testUtils = require('../test-utils')

beforeAll(() => {
  return testUtils.initialize()
})

test('should render TweetDisplay', () => {
  const tweet = {
    text: 'Rodando os testes unitários',
    user: {
      name: 'Castilhos',
      screenName: 'castilh0s'
    },
    createdAt: new Date()
  }

  const { queryByTestId } = render(TweetDisplay, {
    props: {
      tweet: tweet
    }
  })

  expect(queryByTestId('userName')).toHaveTextContent('Castilhos')
  expect(queryByTestId('userScreenName')).toHaveTextContent('@castilh0s')
  expect(queryByTestId('tweet')).toHaveTextContent(
    'Rodando os testes unitários'
  )
})
