import * as React from 'react';
import { AnimationContext } from './animationContext';

export const Gate: React.SFC = ({ children }) => (
  <AnimationContext.Provider value={{}}>{children}</AnimationContext.Provider>
);
