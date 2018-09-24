import * as React from 'react';
import { Container } from 'constate';
import { Animated } from 'react-native';

interface State {
  animatedValue: Animated.Value;
}

interface AnimationValueProviderProps {
  children: (state: State) => React.ReactNode;
  initialValue: number;
}

export const AnimationValueProvider: React.SFC<AnimationValueProviderProps> = ({
  children,
  initialValue,
}) => (
  <Container<State>
    initialState={{ animatedValue: new Animated.Value(initialValue) }}
  >
    {children}
  </Container>
);
