import 'jest-dom/extend-expect'
import { render } from 'vue-testing-library'
import TestComponent from './../nuxt/components/TestComponent'

test('should render HelloWorld', () => {
  const { queryByTestId } = render(TestComponent)
  expect(queryByTestId('test1')).toHaveTextContent('Hello World')
})
