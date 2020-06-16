import { createContext } from 'react';
import { LIGHT } from './types';

export const initialState = {
  lang: 'ar-ma',
  theme: LIGHT,
};

export default createContext(initialState);
