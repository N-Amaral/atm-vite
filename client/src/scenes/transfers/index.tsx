import React from "react";
import OperationLayout from "../../components/OperationLayout";

type Props = {};

const Transfer = (props: Props) => {
  return (
    <div className="mx-4 my-5 w-[60%] rounded-md border-[3px] border-slate-800 md:w-[80%]">
      <OperationLayout hOne="Transferências" hThree={["NIB do Destinatário", "Montante"]} formTypes={["upper", "lower"]} formNumber={[21, 7]} />
    </div>
  );
};

export default Transfer;
