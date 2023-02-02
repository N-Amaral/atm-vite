import React, { ReactComponentElement, ReactElement } from "react";

type Props = {
  children: ReactElement;
};
const Screen = ({ children }: Props) => {
  return <div className="h-100 w-[90%] bg-black">hi</div>;
};

export default Screen;
