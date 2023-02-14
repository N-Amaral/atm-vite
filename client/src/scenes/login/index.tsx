import React, { useEffect, useState, useContext } from "react";
import OperationLayout from "../../components/OperationLayout";
import { CreditCards } from "../../helpers/defaultCards";
import { OperationContext } from "../../context/OperationContext";

import Layout from "../layout";

type Props = {};

type CardProps = {
  name: string;
  number: string;
};

function Card({ name, number }: CardProps) {
  return (
    <div className="flex w-1/3 flex-col justify-center rounded-lg bg-slate-400 text-lg hover:cursor-pointer ">
      <span className="rounded-t-md border-b-2 border-solid border-green-500 bg-slate-200 font-inter font-bold text-slate-600 hover:bg-slate-400">{name}</span>
      <span className="bg-slate-50 font-inter font-extrabold text-slate-800">{number}</span>
    </div>
  );
}

function CardList() {
  return (
    <>
      {CreditCards.map((card, i) => (
        <Card key={`${card.cardName}-${i}`} name={card.cardName} number={card.cardNumber} />
      ))}
    </>
  );
}

function LoginContent({}: Props) {
  // @ts-ignore
  const { dispatch } = useContext(OperationContext);

  useEffect(() => {
    dispatch({
      type: "OPERATION_CHANGE",
      operation: "login",
    });
  }, []);

  return (
    <>
      <OperationLayout hOne="Login" hThree={["NIB", "PIN"]} formTypes={["basic", "basic"]} formNumber={[21, 4]} />
      {/* cardlist */}
      <div className="">
        <ul className="m-2 grid grid-cols-1	gap-y-4 gap-x-1">
          <CardList />
        </ul>
      </div>
    </>
  );
}

function Login({}: Props) {
  return (
    <>
      <Layout children={<LoginContent />} />
    </>
  );
}

export default Login;
