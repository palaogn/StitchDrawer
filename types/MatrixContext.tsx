import { Stitch } from '.';

export type MatrixContextState = {
  matrixWidth: number;
  matrixHeight: number;
  stitchSize: number;
  matrixData: Stitch[];
  matrixBackgroundData: Stitch[];
};

export type MatrixContextDispatcher = {
  state?: MatrixContextState;
  action?: MatrixContextState & {
    type?: string;
  };
};
