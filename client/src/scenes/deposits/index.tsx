import React from "react";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";
import { OperationContext } from "../../context/OperationContext";
import { useContext, useEffect, useState } from "react";

type Props = {};

const DepositsContent = (props: Props) => {
  return <OperationLayout hOne="depositos" hThree={["Conta a depositar", "Montante a Depositar"]} formTypes={["basic", "deposit"]} formNumber={[21, 5]} />;
};

function Deposits({}: Props) {
  // @ts-ignore
  const { dispatch } = useContext(OperationContext);

  useEffect(() => {
    dispatch({
      type: "OPERATION_CHANGE",
      operation: "deposits",
    });
  }, []);
  return <Layout children={<DepositsContent />} />;
}

export default Deposits;
