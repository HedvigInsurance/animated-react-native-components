import * as React from 'react'
import { Animated } from 'react-native'
import { mount } from 'enzyme'
import { AnimationValueProvider } from './animationValueProvider'

test('it should provide an animated value', () => {
  const testFn = jest.fn()

  const Tester = () => (
    <AnimationValueProvider initialValue={12}>
      {({ animatedValue }) => {
        expect(animatedValue).toBeDefined()
        testFn()
        return null
      }}
    </AnimationValueProvider>
  )

  mount(<Tester />)

  expect(testFn).toHaveBeenCalled()
})
