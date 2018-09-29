import * as React from 'react';
import { Animated } from 'react-native';
import { Mount, Update } from 'react-lifecycle-components';

import { AnimationContext } from '../animationContext';
import { AnimationValueProvider } from '../animationValueProvider';

interface AnimationHandlerProps {
  toValue: number;
  initialValue: number;
  getAnimation: (animatedValue: Animated.Value) => Animated.CompositeAnimation;
  children: (animatedValue: Animated.Value) => React.ReactNode;
}

export const AnimationHandler: React.SFC<AnimationHandlerProps> = ({
  initialValue,
  toValue,
  getAnimation,
  children = null,
}) => (
  <AnimationValueProvider initialValue={initialValue}>
    {({ animatedValue }) => (
      <AnimationContext.Consumer>
        {({
          addAnimation = () => {
            console.error(
              'You are trying to run an animation without a runner.',
            );
          },
        }) => (
          <Mount on={() => addAnimation(getAnimation(animatedValue))}>
            <Update<number>
              was={() => addAnimation(getAnimation(animatedValue))}
              watched={toValue}
            >
              {typeof children === 'function'
                ? children(animatedValue)
                : children}
            </Update>
          </Mount>
        )}
      </AnimationContext.Consumer>
    )}
  </AnimationValueProvider>
);
