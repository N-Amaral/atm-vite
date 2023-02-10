import React from "react";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";

type Props = {};

const WithdrawlsContent = (props: Props) => {
  return <OperationLayout hOne="levantamentos" hThree={["Montante a Levantar"]} formTypes={["deposit"]} formNumber={[5]} />;
};

function Withdrawls({}: Props) {
  return (
    <>
      <Layout children={<WithdrawlsContent />} />
    </>
  );
}

export default Withdrawls;
