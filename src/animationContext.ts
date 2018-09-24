import { Animated } from 'react-native';
import { createContext } from 'react';

interface AnimationContext {
    addAnimation?: (animation: Animated.CompositeAnimation) => void
}

export const AnimationContext = createContext<AnimationContext>({
});
