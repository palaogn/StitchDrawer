import { Matrix } from '.';

export type MatrixContextState = {
  matrixWidth: number;
  matrixHeight: number;
  stitchSize: number;
  matrixData: Matrix;
};

export type MatrixContextDispatcher = {
  state?: MatrixContextState;
  action?: MatrixContextState & {
    type?: string;
  };
};
