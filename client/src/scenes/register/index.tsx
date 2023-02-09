import React from "react";
import Layout from "../layout";
import OperationLayout from "../../components/OperationLayout";
import { HeaderOneText, HeaderThreeText } from "../../components/HeaderText";

type Props = {};

const RegisterContent = (props: Props) => {
  return (
    <div>
      <HeaderOneText>Register</HeaderOneText>
      <div>
        <div className="m-2 flex flex-col gap-3">
          <div className="flex w-[600px] flex-col">
            <label className="text-xl font-extrabold text-white" htmlFor="name">
              Name
            </label>
            <input className="rounded-md " id="name" type="text" required maxLength={50} />
          </div>
          <div className="flex w-[600px] flex-col">
            <label className="text-xl font-extrabold text-white" htmlFor="pin">
              PIN
            </label>
            <input className="rounded-md " id="pin" type="password" required maxLength={4} />
          </div>
          <div className="flex w-[200px] flex-col">
            <label className="text-xl font-extrabold text-white" htmlFor="amount">
              Amount
            </label>
            <input className="rounded-md " id="amount" type="tel" required />
          </div>
        </div>
      </div>
    </div>
  );
};

function Register({}: Props) {
  return <Layout children={<RegisterContent />} />;
}

export default Register;
