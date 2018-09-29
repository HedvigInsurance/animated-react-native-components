import * as React from 'react';
import { Animated } from 'react-native';

import { AnimationHandler } from './animationHandler';
import { AnimationConfigWithoutToValue } from '../types';

interface SpringProps {
  toValue: number;
  initialValue: number;
  children: (animatedValue: Animated.Value) => React.ReactNode;
  config: AnimationConfigWithoutToValue<Animated.SpringAnimationConfig>;
}

export const Spring: React.SFC<SpringProps> = ({
  children,
  toValue,
  initialValue,
  config: {
    overshootClamping,
    restDisplacementThreshold,
    restSpeedThreshold,
    velocity,
    bounciness,
    speed,
    tension,
    friction,
    stiffness,
    mass,
    damping,
    isInteraction,
    useNativeDriver = true,
  },
}) => (
  <AnimationHandler
    toValue={toValue}
    getAnimation={(animatedValue) =>
      Animated.spring(animatedValue, {
        overshootClamping,
        restDisplacementThreshold,
        restSpeedThreshold,
        velocity,
        bounciness,
        speed,
        tension,
        friction,
        stiffness,
        mass,
        damping,
        toValue,
        isInteraction,
        useNativeDriver,
      })
    }
    initialValue={initialValue}
  >
    {children}
  </AnimationHandler>
);
