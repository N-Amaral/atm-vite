import React from "react";

type BasicProps = {
  inputs: number;
};

type Props = {
  inputs: number;
  formType: string;
};

const BasicInput = () => {
  return (
    <>
      <input
        className="h-[3rem] w-[3rem] rounded-lg border-[2px] border-solid border-b-gray-400 bg-slate-600 text-center font-inter text-2xl font-bold text-white"
        type={"tel"}
        maxLength={1}
        defaultValue={""}
        required
      />
    </>
  );
};

// used in the Payment of Services
const PaymentForm = () => {
  const content: Array<React.ReactElement> = [];

  for (let i: number = 0; i < 7; i++) {
    if (i === 2) {
      content.push(
        <li key={`input-${i}`}>
          <span>.</span>
          <BasicInput />
        </li>
      );
    } else if (i === 5) {
      content.push(
        <li key={`input-${i}`}>
          <span>,</span>
          <BasicInput />
        </li>
      );
    } else {
      content.push(
        <li key={`input-${i}`}>
          <BasicInput />
        </li>
      );
    }
  }

  return <ul className="inputForm flex flex-row gap-2">{content}</ul>;
};

// used in the Payment of Services
const BankRefForm = () => {
  const content: Array<React.ReactElement> = [];

  for (let i: number = 0; i < 9; i++) {
    content.push(
      <li key={`input-${i}`}>
        <BasicInput />
      </li>
    );
  }

  return <ul className="inputForm flex flex-row gap-2">{content}</ul>;
};

// used in Deposit and Withdrawl Operations
const DepositWithdrawForm = () => {
  const content: Array<React.ReactElement> = [];

  for (let i: number = 0; i < 5; i++) {
    if (i === 2) {
      content.push(
        <li key={`input-${i}`}>
          <span>.</span>
          <BasicInput />
        </li>
      );
    } else {
      content.push(
        <li key={`input-${i}`}>
          <BasicInput />
        </li>
      );
    }
  }

  return <ul className="inputForm flex flex-row gap-2">{content}</ul>;
};

// the base version of the forms, variable number of inputs
const BasicForm = ({ inputs }: BasicProps) => {
  const content: Array<React.ReactElement> = [];

  for (let i: number = 0; i < inputs; i++) {
    content.push(
      <li className="" key={`input-${i}`}>
        <BasicInput />
      </li>
    );
  }
  return <ul className="inputForm flex flex-row gap-2">{content}</ul>;
};

const Form = ({ inputs, formType }: Props) => {
  let content;
  switch (formType) {
    case "deposit":
    case "withdraw":
      content = <DepositWithdrawForm />;
      break;
    case "bankref":
      content = <BankRefForm />;
      break;
    case "payment":
      content = <PaymentForm />;
      break;
    default:
      content = <BasicForm inputs={inputs} />;
      break;
  }
  return content;
};

export default Form;
