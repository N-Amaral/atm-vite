import React, { useEffect, useContext } from "react";
import { OperationContext } from "../../context/OperationContext";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";

type Props = {};

const WithdrawlsContent = (props: Props) => {
  return <OperationLayout hOne="levantamentos" hThree={["Montante a Levantar"]} formTypes={["deposit"]} formNumber={[5]} />;
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
      <Layout children={<WithdrawlsContent />} />
    </>
  );
}

export default Withdrawls;
