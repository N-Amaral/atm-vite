import React from "react";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";

type Props = {};

const TransferContent = (props: Props) => {
  return <OperationLayout hOne="Transferências" hThree={["NIB do Destinatário", "Montante"]} formTypes={["basic", "payment"]} formNumber={[21, 7]} />;
};

function Transfer({}: Props) {
  return (
    <>
      <Layout children={<TransferContent />} />
    </>
  );
}

export default Transfer;
