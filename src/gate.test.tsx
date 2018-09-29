import * as React from 'react'
import { mount } from 'enzyme'
import { Parallel } from './runners/parallel'
import { AnimationContext } from './animationContext'
import { Gate } from './gate'

test('it should reset context', () => {
  const testFn = jest.fn()

  const Tester = () => (
    <AnimationContext.Consumer>
      {({ addAnimation }) => {
        expect(addAnimation).toBe(undefined)
        testFn()
        return null
      }}
    </AnimationContext.Consumer>
  )

  mount(
    <Parallel>
      <Gate>
        <Tester />
      </Gate>
    </Parallel>,
  )

  expect(testFn).toHaveBeenCalled()
})
