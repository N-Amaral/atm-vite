import React from "react";

type Props = {
  children: React.ReactNode;
};

export const InputContext = React.createContext<Array<string[]> | null>(null);
