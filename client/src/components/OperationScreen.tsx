import React from "react";

type Props = {
  children: React.ReactNode;
};

function OperationScreen({ children }: Props) {
  return <div className="mx-4 my-4 h-[95%] w-[60%] rounded-md border-[3px] border-slate-800 bg-black pb-5 md:w-[80%]">{children}</div>;
}

export default OperationScreen;
