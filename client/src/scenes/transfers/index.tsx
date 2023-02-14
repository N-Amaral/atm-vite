import React, { useEffect, useContext } from "react";
import { OperationContext } from "../../context/OperationContext";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";

type Props = {};

const TransferContent = (props: Props) => {
  return <OperationLayout hOne="Transferências" hThree={["NIB do Destinatário", "Montante"]} formTypes={["basic", "payment"]} formNumber={[21, 7]} />;
};

function Transfer({}: Props) {
  // @ts-ignore
  const { dispatch } = useContext(OperationContext);

  useEffect(() => {
    dispatch({
      type: "OPERATION_CHANGE",
      operation: "transfers",
    });
  }, []);

  return (
    <>
      <Layout children={<TransferContent />} />
    </>
  );
}

export default Transfer;
