import React, { cloneElement } from 'react';
import { MatrixDataContext } from './MatrixDataContext';
import { ToolbarContext } from './ToolbarContext';
import { ModalContext } from './ModalContext';

const providers = [
  <MatrixDataContext.Provider />,
  <ToolbarContext.Provider />,
  <ModalContext.Provider />,
];

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => cloneElement(parent, { children }),
    initial
  );

export { Store, MatrixDataContext, ToolbarContext, ModalContext };
