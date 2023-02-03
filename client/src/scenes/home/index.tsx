import React from "react";
import { operationList } from "../../helpers/operationList";
import MenuOptions from "../../components/MenuOptions";
import Layout from "../layout";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Layout children={<MenuOptions opTitles={operationList.PT.levantamentos.opTitles} opValues={operationList.PT.levantamentos.opValues} />} />
    </>
  );
};

export default Home;
