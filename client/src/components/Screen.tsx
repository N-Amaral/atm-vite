import React, { ReactComponentElement, ReactElement } from "react";

type Props = {
  children: React.ReactNode;
};
const Screen = ({ children }: Props) => {
  return <div className="h-[60vh] w-[80%] bg-black ">{children}</div>;
};

export default Screen;
