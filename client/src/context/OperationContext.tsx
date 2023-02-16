import React, { createContext, useEffect, useState, useContext, useReducer } from "react";

type Props = {
  children: React.ReactNode;
};

export const OperationContext = React.createContext<{ operation: string; dispatch: Function } | null>(null);

export const OperationContextProvider = ({ children }: Props) => {
  const INITIAL_STATE = { operation: null };

  const operationReducer = (state: any, action: any) => {
    switch (action.type) {
      case "OPERATION_CHANGE":
        return {
          operation: action.operation,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(operationReducer, INITIAL_STATE);

  return <OperationContext.Provider value={{ operation: state, dispatch }}>{children}</OperationContext.Provider>;
};
