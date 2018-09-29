import * as React from 'react';
import { Animated } from 'react-native';
import { Update } from 'react-lifecycle-components';

import { AnimationContext } from '../animationContext';
import { AnimationState } from '../animationState';

interface RunnerProps {
  shouldStart: boolean;
  getRunner: (
    animations: Animated.CompositeAnimation[],
  ) => Animated.CompositeAnimation;
}

export const RunnerHandler: React.SFC<RunnerProps> = ({
  children,
  getRunner,
  shouldStart,
}) => (
  <AnimationContext.Consumer>
    {({ addAnimation: upperAddAnimation }) => (
      <AnimationState>
        {({ addAnimation, removeAnimations, animations }) => (
          <Update<{
            animations: Animated.CompositeAnimation[];
            shouldStart: boolean;
          }>
            watched={{ animations, shouldStart }}
            was={() => {
              if (animations.length !== 0 && shouldStart) {
                if (upperAddAnimation) {
                  upperAddAnimation(getRunner(animations));
                } else {
                  getRunner(animations).start();
                }

                removeAnimations(animations);
              }
            }}
          >
            <AnimationContext.Provider value={{ addAnimation }}>
              {children}
            </AnimationContext.Provider>
          </Update>
        )}
      </AnimationState>
    )}
  </AnimationContext.Consumer>
);
