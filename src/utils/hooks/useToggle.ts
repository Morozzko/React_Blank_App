import { useState } from 'react';

export const useToggle = (initialState?: boolean) => {
  const [state, setState] = useState<boolean>(initialState ? initialState : false);

  const toggle = () => setState(!state);

  return [state, toggle];
};
