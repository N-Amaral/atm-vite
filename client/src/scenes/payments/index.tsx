import React from "react";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";

type Props = {};

const PaymentsContent = (props: Props) => {
  return (
    <OperationLayout
      hOne="Pagamentos de Serviços"
      hThree={["Entidade", "Referência Bancária", "Montante"]}
      formTypes={["upper", "middle", "lower"]}
      formNumber={[4, 9, 7]}
    />
  );
};

function Payments({}: Props) {
  return (
    <>
      <Layout children={<PaymentsContent />} />
    </>
  );
}

export default Payments;
