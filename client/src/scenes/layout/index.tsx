import React, { ReactElement } from "react";
import Screen from "../../components/Screen";
import Keyboard from "../../components/Keyboard";
import { RightSide, LeftSide } from "../../components/ScreenKeys";

type Props = {
  children: React.ReactNode;
};

const ScreenLayout = ({ children }: Props) => {
  return (
    <div className="mt-1 mb-3 flex justify-center">
      <LeftSide />
      <Screen children={children} />
      <RightSide />
    </div>
  );
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <ScreenLayout children={children} />
      <Keyboard />
    </div>
  );
};

export default Layout;
