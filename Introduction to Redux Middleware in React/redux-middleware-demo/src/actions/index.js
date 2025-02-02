import { INCREMENT, DECREMENT } from './types';

export const incrementAction = () => {
  return { type: INCREMENT };
};

export const decrementAction = () => {
  return { type: DECREMENT };
};
