import React from "react";
import OperationLayout from "../../components/OperationLayout";
import { CreditCards } from "../../helpers/defaultCards";

type Props = {};

type CardProps = {
  name: string;
  number: string;
};

function Card({ name, number }: CardProps) {
  return (
    <div className="flex w-1/3 flex-col justify-center rounded-lg   bg-slate-400 text-lg hover:cursor-pointer ">
      <span className="rounded-t-md border-b-2 border-solid border-green-500 bg-slate-200 font-inter font-bold text-slate-600 hover:bg-slate-400">{name}</span>
      <span className="bg-slate-50 font-inter font-extrabold text-slate-800 ">{number}</span>
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

function Login({}: Props) {
  return (
    <div className="mx-4 my-5 w-[60%] rounded-md border-[3px] border-slate-800 md:w-[80%]">
      <OperationLayout hOne="Login" hThree={["NIB", "PIN"]} formTypes={["upper", "lower"]} formNumber={[21, 4]} />
      {/* cardlist */}
      <div className="">
        <ul className="m-2 grid  grid-cols-1	gap-y-4 gap-x-1 ">
          <CardList />
        </ul>
      </div>
    </div>
  );
}

export default Login;
