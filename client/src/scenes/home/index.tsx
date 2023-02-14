import React, { useContext, useEffect } from "react";
import { operationList } from "../../helpers/operationList";
import MenuOptions from "../../components/MenuOptions";
import Layout from "../layout";
import { OperationContext } from "../../context/OperationContext";

type Props = {};

const Home = (props: Props) => {
  // @ts-ignore
  const { dispatch } = useContext(OperationContext);

  useEffect(() => {
    dispatch({
      type: "OPERATION_CHANGE",
      operation: "home",
    });
  }, []);

  return (
    <>
      <Layout children={<MenuOptions opTitles={Object.keys(operationList.PT)} />} />
    </>
  );
};

export default Home;
