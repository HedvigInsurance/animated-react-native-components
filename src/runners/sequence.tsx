import * as React from 'react';
import { Animated } from 'react-native';

import { RunnerHandler } from "./runnerHandler"

interface SequenceProps {
    shouldStart?: boolean
}

export const Sequence: React.SFC<SequenceProps> = ({ children, shouldStart = true }) => (
    <RunnerHandler shouldStart={shouldStart} getRunner={animations => Animated.sequence(animations)}>
        {children}
    </RunnerHandler>
);
