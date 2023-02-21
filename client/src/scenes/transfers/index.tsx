import React, { useEffect, useContext } from "react";
import { OperationContext } from "../../context/OperationContext";
import OperationLayout from "../../components/OperationLayout";
import Layout from "../layout";
import { HeaderThreeText } from "../../components/HeaderText";
type Props = {};

const TransferPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="m-2  basis-1/4 p-5 uppercase">
        <h1 className="text-3xl font-extrabold text-white">transferência multibanco</h1>
      </div>
      <div className="text m-2 basis-1/4 p-5 uppercase">
        <HeaderThreeText>para o mesmo banco: crédito no próprio dia.</HeaderThreeText>
      </div>
      <div className="m-2 basis-1/4 p-5 uppercase">
        <HeaderThreeText>para outro banco - até às 15h de dia útil:</HeaderThreeText>
        <HeaderThreeText>crédito até ao 1º dia útil seguinte.</HeaderThreeText>
      </div>
      <div className="m-2  basis-1/4 p-5 uppercase">
        <HeaderThreeText>para outro banco - depois das 15h ou em dia não útil:</HeaderThreeText>
        <HeaderThreeText>crédito até ao 2º dia útil seguinte.</HeaderThreeText>
      </div>
    </div>
  );
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
      <Layout children={<TransferPage />} />
    </>
  );
}

export default Transfer;
