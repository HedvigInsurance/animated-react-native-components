import * as React from 'react';
import { Animated } from 'react-native';

import { RunnerHandler } from "./runnerHandler"

interface ParallelProps {
    shouldStart?: boolean
}

export const Parallel: React.SFC<ParallelProps> = ({ children, shouldStart = true }) => (
    <RunnerHandler shouldStart={shouldStart} getRunner={animations => Animated.parallel(animations)}>
        {children}
    </RunnerHandler>
);
