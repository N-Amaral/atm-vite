import React, { useEffect, useContext } from "react";
import { OperationContext } from "../../context/OperationContext";
import Layout from "../layout";
import MenuOptions from "../../components/MenuOptions";
import { operationList } from "../../helpers/operationList";

type Props = {};

const WithdrawlMenu = (props: Props) => {
  const titles: string[] = operationList.PT.levantamentos.opTitles;
  const values: string[] = operationList.PT.levantamentos.opValues;

  return <MenuOptions opTitles={titles} opValues={values} />;
};

function Withdrawls({}: Props) {
  // @ts-ignore
  const { dispatch } = useContext(OperationContext);

  useEffect(() => {
    dispatch({
      type: "OPERATION_CHANGE",
      operation: "withdrawls",
    });
  }, []);

  return (
    <>
      <Layout children={<WithdrawlMenu />} />
    </>
  );
}

export default Withdrawls;
