import React from "react";

type Props = {};

const RightSide = () => {
  const content: string[] = ["1", "3", "5", "7"];

  return (
    <div className="sideKeyWrapperRight">
      {content.map((num, i) => (
        <div className="screenKeyRight" id={`${parseInt(num)}`} key={`${num}-${i}`}>
          <span className="screenKeySymbolRight">{">"}</span>
        </div>
      ))}
    </div>
  );
};

const LeftSide = () => {
  const content: string[] = ["2", "4", "6", "8"];
  return (
    <div className="sideKeyWrapperLeft">
      {content.map((num, i) => (
        <div className="screenKeyLeft" id={`${parseInt(num)}`} key={`${num}-${i}`}>
          <span className="screenKeySymbolLeft">{"<"}</span>
        </div>
      ))}
    </div>
  );
};

const ScreenKeys = (props: Props) => {
  return (
    <div className="sideWrapper">
      <RightSide />
      <LeftSide />
    </div>
  );
};

export default ScreenKeys;
