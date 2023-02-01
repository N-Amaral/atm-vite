import React from "react";
import Screen from "../../components/Screen";
import Keyboard from "../../components/Keyboard";
import ScreenKeys from "../../components/ScreenKeys";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="layout">
      <Screen />
      <ScreenKeys />
      <Keyboard />
    </div>
  );
};

export default Layout;
