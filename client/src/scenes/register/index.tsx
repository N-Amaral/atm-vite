import React from "react";
import Layout from "../layout";
import OperationLayout from "../../components/OperationLayout";

type Props = {};

const RegisterContent = (props: Props) => {
  return <div>Register</div>;
};

function Register({}: Props) {
  return <Layout children={<RegisterContent />} />;
}

export default Register;
