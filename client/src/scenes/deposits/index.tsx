import React from "react";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";
import { OperationContext } from "../../context/OperationContext";
import { useContext, useEffect, useState } from "react";
import MenuOptions from "../../components/MenuOptions";
import { operationList } from "../../helpers/operationList";

type Props = {};

const DepositMenu = (props: Props) => {
  const titles: string[] = operationList.PT.depositos;

  return <MenuOptions opTitles={titles} opValues={undefined} />;
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
  return <Layout children={<DepositMenu />} />;
}

export default Deposits;
