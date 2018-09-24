import * as React from 'react';
import { Animated } from 'react-native';

import { RunnerHandler } from './runnerHandler';

interface LoopProps {
  shouldStart?: boolean;
  iterations?: number;
}

export const Loop: React.SFC<LoopProps> = ({
  children,
  shouldStart = true,
  iterations,
}) => (
  <RunnerHandler
    shouldStart={shouldStart}
    getRunner={(animations) =>
      Animated.loop(Animated.parallel(animations), {
        iterations,
      })
    }
  >
    {children}
  </RunnerHandler>
);
