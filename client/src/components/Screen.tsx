import React from "react";
import OperationScreen from "./OperationScreen";

type Props = {
  children: React.ReactNode;
};
const Screen = ({ children }: Props) => {
  return (
    <div className="align-center flex h-[60vh] w-[80%] justify-center rounded-md border-[4px] border-solid border-slate-800 bg-blue-600">
      <OperationScreen>{children}</OperationScreen>
    </div>
  );
};

export default Screen;
