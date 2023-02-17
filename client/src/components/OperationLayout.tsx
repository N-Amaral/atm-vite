import React, { useState, useContext, useEffect } from "react";
import { InputContext } from "../context/InputContext";
import { OnScreenKeyboard, formsNumber } from "../scripts/inputScripts";
import Form from "./Form";
import { HeaderOneText, HeaderThreeText } from "./HeaderText";

type Props = {
  hOne: string;
  hThree: Array<string>;
  formTypes: Array<string>;
  formNumber: Array<number>;
};

const OperationLayout = ({ hOne, hThree, formTypes, formNumber }: Props) => {
  return (
    <>
      {/* title */}
      <div className="my-2 mx-2 ">
        <HeaderOneText>{hOne}</HeaderOneText>
      </div>
      <div className="">
        {/* form setup */}
        {hThree.map((name, i) => (
          <div key={i}>
            {/* form header */}
            <div className="my-2 mx-2 ">
              <HeaderThreeText>{name}</HeaderThreeText>
            </div>
            {/* form content */}
            <div className="my-2 mx-2">
              <Form inputs={formNumber[i]} formType={formTypes[i]} />
            </div>
          </div>
        ))}
        {hOne === "login" ? (
          <button type="button" className=" my-2 mx-2 h-[2rem] w-[5rem] rounded-md border bg-blue-600 font-inter font-bold text-white hover:bg-blue-500">
            Login
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OperationLayout;
