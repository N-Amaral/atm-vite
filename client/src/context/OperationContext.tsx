import { createContext, useEffect, useState, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

export const OperationContext = createContext("login");

export const OperationContextProvider = ({ children }: Props) => {
  const [operation, setOperation] = useState("home");
  useEffect(() => {
    const currentOperation = (newOperation: string) => {
      setOperation((prev) => newOperation);
    };
    return () => {
      currentOperation();
    };
  }, []);

  return <OperationContext.Provider value={operation}>{children}</OperationContext.Provider>;
};
