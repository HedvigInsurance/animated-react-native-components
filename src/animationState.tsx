import * as React from 'react'
import { Container, ActionMap } from 'constate'
import { without } from 'rambda'
import { Animated } from 'react-native'

interface State {
  animations: Animated.CompositeAnimation[]
}

interface Actions {
  addAnimation: (
    animation: Animated.CompositeAnimation,
  ) => (state: State) => void
  removeAnimations: (
    animations: Animated.CompositeAnimation[],
  ) => (state: State) => void
}

const initialState: State = {
  animations: [],
}

const actions: ActionMap<State, Actions> = {
  addAnimation: (animation) => (state) => ({
    animations: [...state.animations, animation],
  }),
  removeAnimations: (animations) => (state) => ({
    animations: without(animations, state.animations),
  }),
}

interface AnimationStateProps {
  children: (stateAndActions: State & Actions) => React.ReactNode
}

export const AnimationState: React.SFC<AnimationStateProps> = ({
  children,
}) => (
  <Container actions={actions} initialState={initialState}>
    {children}
  </Container>
)
