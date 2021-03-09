export type ModalContentType =
  | 'ColorPicker'
  | 'StitchPicker'
  | 'MatrixSettings';

export type ModalContextState = {
  showModal: boolean;
  modalContentType?: ModalContentType;
};

export type ModalContextDispatcher = {
  state?: ModalContextState;
  action?: ModalContextState & {
    type?: string;
  };
};
