import React, { useEffect, useState, useContext } from "react";
import { OperationContext } from "../context/OperationContext";
import OperationLayout from "./OperationLayout";
import Layout from "../scenes/layout";
import MenuOptions from "./MenuOptions";

type Props = {};

const WithdrawlsContent = (props: Props) => {
  return <OperationLayout hOne="levantamentos" hThree={["Montante a Levantar"]} formTypes={["deposit"]} formNumber={[5]} />;
};

const DepositsContent = (props: Props) => {
  return <OperationLayout hOne="depositos" hThree={["Conta a depositar", "Montante a Depositar"]} formTypes={["basic", "deposit"]} formNumber={[21, 5]} />;
};

const TransferContent = (props: Props) => {
  return <OperationLayout hOne="transferências" hThree={["NIB do Destinatário", "Montante"]} formTypes={["basic", "payment"]} formNumber={[21, 7]} />;
};

const OperationForm = (props: Props) => {
  const context = useContext(OperationContext);
  console.log(context?.operation);

  return (
    <>
      <Layout children={<WithdrawlsContent />} />
    </>
  );
};

export default OperationForm;
