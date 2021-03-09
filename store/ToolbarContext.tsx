import React, { createContext, Context, useReducer } from 'react';
import { ToolbarContextState, ToolbarContextDispatcher } from '../types';

const initialData: ToolbarContextState = {
  color: '#00807d',
  stitchType: 'Cross',
};

// Context
const State: Context<ToolbarContextState> = createContext(initialData);
const Dispatch: Context<ToolbarContextDispatcher> = createContext({});

// Reducer
const reducer = (state: ToolbarContextState, action) => {
  console.log({ action, state });
  switch (action.type) {
    case 'color':
      return {
        ...state,
        color: action.color,
      };
    case 'stitchType':
      return {
        ...state,
        stitchType: action.stitchType,
      };
    default:
      return state;
  }
};

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

// Export
export const ToolbarContext = {
  State,
  Dispatch,
  Provider,
};
