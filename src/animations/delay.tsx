import * as React from 'react';
import { Animated } from 'react-native';
import { Mount, Update } from 'react-lifecycle-components';

import { AnimationContext } from '../animationContext';

interface DelayProps {
  config?: {
    delay?: number;
  };
}

export const Delay: React.SFC<DelayProps> = ({
  config: { delay = 0 } = {},
}) => (
  <AnimationContext.Consumer>
    {({ addAnimation = () => {
            console.error(
              'You are trying to run an animation without a runner.',
            );
          } }) => {
      return (
        <Mount
          on={() => {
            if (delay !== 0) {
              addAnimation(Animated.delay(delay));
            }
          }}
        >
          <Update<{ delay: number }>
            watched={{ delay }}
            was={() => {
              if (delay !== 0) {
                addAnimation(Animated.delay(delay));
              }
            }}
          >
            {null}
          </Update>
        </Mount>
      );
    }}
  </AnimationContext.Consumer>
);
