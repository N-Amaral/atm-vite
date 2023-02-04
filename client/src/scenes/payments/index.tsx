import React from "react";
import OperationLayout from "../../components/OperationLayout";

type Props = {};

const Payments = (props: Props) => {
  return (
    <div className="mx-4 my-5 w-[60%] rounded-md border-[3px] border-slate-800 md:w-[80%]">
      <OperationLayout
        hOne="Pagamentos de Serviços"
        hThree={["Entidade", "Referência Bancária", "Montante"]}
        formTypes={["upper", "middle", "lower"]}
        formNumber={[4, 9, 7]}
      />
    </div>
  );
};

export default Payments;
