import React, { useContext, useEffect } from "react";
import { operationList } from "../../helpers/operationList";
import MenuOptions from "../../components/MenuOptions";
import Layout from "../layout";
import { OperationContext } from "../../context/OperationContext";
import OperationLayout from "../../components/OperationLayout";
import { HeaderOneText, HeaderThreeText } from "../../components/HeaderText";

type Props = {};

const CheckingsContent = () => {
  return <></>;
};

const Checkings = (props: Props) => {
  // @ts-ignore
  const { dispatch } = useContext(OperationContext);

  useEffect(() => {
    dispatch({
      type: "OPERATION_CHANGE",
      operation: "checkings",
    });
  }, []);
  return <Layout children={<MenuOptions opTitles={operationList.PT.consultas} />} />;
};

export default Checkings;
