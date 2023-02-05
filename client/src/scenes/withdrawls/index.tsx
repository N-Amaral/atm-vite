import React from "react";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";

type Props = {};

const DepositsContent = (props: Props) => {
  return <OperationLayout hOne="depositos" hThree={["Conta a depositar", "Montante a Depositar"]} formTypes={["upper", "lower"]} formNumber={[21, 5]} />;
};

function Deposits({}: Props) {
  return (
    <>
      <Layout children={<DepositsContent />} />
    </>
  );
}

export default Deposits;
