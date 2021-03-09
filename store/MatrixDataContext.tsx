import React, { createContext, Context, useReducer } from 'react';
import { MatrixContextDispatcher, MatrixContextState, Stitch } from '../types';

const initialStitchSize = 20;
const initialMatrixHeight = 30;
const initialMatrixWidth = 30;
const emptyStitch: Stitch = { stitch: 'None' };

const initiateMatrixData = () => {
  let initialGrid = [];
  for (let row = 0; row < initialMatrixHeight; row++) {
    let row = [];
    for (let stitch = 0; stitch < initialMatrixWidth; stitch++) {
      row = [...row, { ...emptyStitch }];
    }
    initialGrid = [...initialGrid, row];
  }
  return initialGrid;
};

const initialData: MatrixContextState = {
  stitchSize: initialStitchSize,
  matrixWidth: initialMatrixWidth,
  matrixHeight: initialMatrixHeight,
  matrixData: initiateMatrixData(),
};

// Context
const State: Context<MatrixContextState> = createContext(initialData);
const Dispatch: Context<MatrixContextDispatcher> = createContext({});
// : Dispatch<MatrixContextDispatcher>

const reducer = (state: MatrixContextState, action) => {
  switch (action.type) {
    case 'stitchSize':
      return {
        ...state,
        stitchType: action.stitchType,
      };
    case 'matrixWidth':
      return {
        ...state,
        matrixWidth: action.matrixWidth,
      };
    case 'matrixHeight':
      return {
        ...state,
        matrixHeight: action.matrixHeight,
      };
    case 'matrixData':
      return {
        ...state,
        matrixData: action.matrixData,
      };
    case 'matrixSettings':
      return {
        ...state,
        matrixData: action.matrixData,
        matrixHeight: action.matrixHeight,
        matrixWidth: action.matrixWidth,
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

export const MatrixDataContext = {
  State,
  Dispatch,
  Provider,
};
