export enum OperationTypes {
  Login = "login",
  Register = "register",
  Home = "home",
  Deposits = "deposits",
  Payments = "payments",
  Transfers = "transfers",
  Withdrawls = "withdrawls",
}

export interface Account {
  cardName: string;
  cardNumber: string;
  password: string;
  balance: string;
  operations: {
    deposits: [string];
    payments: [string];
    transfers: [string];
    withdrawls: [string];
  };
}

export interface Operation {
  type: string;
  value: string;
  date: Date;
}
