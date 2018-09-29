import * as React from 'react';
import { Animated } from 'react-native';

import { AnimationHandler } from './animationHandler';
import { AnimationConfigWithoutToValue } from '../types';

interface TimingProps {
  toValue: number;
  initialValue: number;
  children: (animatedValue: Animated.Value) => React.ReactNode;
  config: AnimationConfigWithoutToValue<Animated.TimingAnimationConfig>;
}

export const Timing: React.SFC<TimingProps> = ({
  children,
  toValue,
  initialValue,
  config: { easing, duration, delay, isInteraction, useNativeDriver = true },
}) => (
  <AnimationHandler
    toValue={toValue}
    getAnimation={(animatedValue) =>
      Animated.timing(animatedValue, {
        toValue,
        easing,
        duration,
        delay,
        isInteraction,
        useNativeDriver,
      })
    }
    initialValue={initialValue}
  >
    {children}
  </AnimationHandler>
);
