import React, { useEffect, useContext } from "react";
import { OperationContext } from "../../context/OperationContext";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";

type Props = {};

const PaymentsContent = (props: Props) => {
  return (
    <OperationLayout
      hOne="Pagamentos de Serviços"
      hThree={["Entidade", "Referência Bancária", "Montante"]}
      formTypes={["basic", "bankref", "payment"]}
      formNumber={[5, 9, 7]}
    />
  );
};

function Payments({}: Props) {
  // @ts-ignore
  const { dispatch } = useContext(OperationContext);

  useEffect(() => {
    dispatch({
      type: "OPERATION_CHANGE",
      operation: "payments",
    });
  }, []);

  return (
    <>
      <Layout children={<PaymentsContent />} />
    </>
  );
}

export default Payments;
