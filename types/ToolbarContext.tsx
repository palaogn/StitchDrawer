import { StitchType } from '.';

export type ToolbarContextState = {
  color: string;
  stitchType: StitchType;
};

export type ToolbarContextDispatcher = {
  state?: ToolbarContextState;
  action?: ToolbarContextState & {
    type?: string;
  };
};
