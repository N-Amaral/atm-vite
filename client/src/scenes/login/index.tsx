import React from "react";
import { HeaderOneText, HeaderThreeText } from "../../components/HeaderText";
import { CreditCards } from "../../helpers/defaultCards";
import Form from "../../components/Form";

type Props = {};

type CardProps = {
  name: string;
  number: string;
};

function Card({ name, number }: CardProps) {
  return (
    <div className="flex w-1/3 flex-col justify-center rounded-lg   bg-slate-400 text-lg hover:cursor-pointer">
      <span className="border-b-2 border-solid border-green-500 bg-slate-200 font-inter font-bold text-slate-600">{name}</span>
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

function Login({}: Props) {
  return (
    <div className="">
      {/* title */}
      <div>
        <HeaderOneText>Login</HeaderOneText>
      </div>
      <div>
        {/* upper form */}
        <div>
          <div>
            <HeaderThreeText>Número de Conta</HeaderThreeText>
          </div>
          <div>
            <Form inputs={21} formType={"upper"} />
          </div>
        </div>
        {/* lower form */}
        <div>
          <div>
            <HeaderThreeText>PIN</HeaderThreeText>
          </div>
          <div>
            <Form inputs={4} formType={"upper"} />
          </div>
        </div>
      </div>
      {/* cardlist */}
      <div className=" w-1/2">
        <ul className="m-2 grid  grid-cols-1	gap-y-4 gap-x-1 ">
          <CardList />
        </ul>
      </div>
    </div>
  );
}

export default Login;
