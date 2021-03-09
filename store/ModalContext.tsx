import { createContext, Context, useReducer } from 'react';
import { ModalContextState, ModalContextDispatcher } from '../types';

const initialData: ModalContextState = {
  showModal: false,
  modalContentType: undefined,
};

const State: Context<ModalContextState> = createContext(initialData);
//
const Dispatch: Context<ModalContextDispatcher> = createContext({});
//

const reducer = (state: ModalContextState, action) => {
  switch (action.type) {
    case 'openModal':
      return {
        ...state,
        showModal: true,
        modalContentType: action.modalContentType,
      };
    case 'closeModal':
      return {
        ...state,
        showModal: false,
        modalContentType: undefined,
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

export const ModalContext = {
  State,
  Dispatch,
  Provider,
};
