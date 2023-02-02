import React from "react";
import { operationList } from "../../helpers/operationList";
import MenuOptions from "../../components/MenuOptions";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <MenuOptions opTitles={operationList.PT.levantamentos.opTitles} opValues={operationList.PT.levantamentos.opValues} />
    </div>
  );
};

export default Home;
