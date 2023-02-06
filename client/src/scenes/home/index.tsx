import React from "react";
import { operationList } from "../../helpers/operationList";
import MenuOptions from "../../components/MenuOptions";
import Layout from "../layout";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Layout children={<MenuOptions opTitles={Object.keys(operationList.PT)} />} />
    </>
  );
};

export default Home;
