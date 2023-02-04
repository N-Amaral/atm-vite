import React from "react";
import OperationLayout from "../../components/OperationLayout";

type Props = {};

const Deposits = (props: Props) => {
  return (
    <div className="mx-4 my-5 w-[60%] rounded-md border-[3px] border-slate-800 md:w-[80%]">
      <OperationLayout hOne="depositos" hThree={["Conta a depositar", "Montante a Depositar"]} formTypes={["upper", "lower"]} formNumber={[21, 5]} />
    </div>
  );
};

export default Deposits;
