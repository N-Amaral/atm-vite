import React, { useState, useContext } from "react";
import Home from "./scenes/home";
import Login from "./scenes/login";
import Register from "./scenes/register";
import Transfer from "./scenes/transfers";
import Payments from "./scenes/payments";
import Deposits from "./scenes/deposits";
import Withdrawls from "./scenes/withdrawls";
import Checkings from "./scenes/check";
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";
import { OperationContextProvider } from "./context/OperationContext";
function App() {
  return (
    <OperationContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="registros" element={<Register />} />
          <Route path="consultas" element={<Checkings />} />
          <Route path="transferencias" element={<Transfer />} />
          <Route path="pagamentos" element={<Payments />} />
          <Route path="depositos" element={<Deposits />} />
          <Route path="levantamentos" element={<Withdrawls />} />
        </Routes>
      </BrowserRouter>
    </OperationContextProvider>
  );
}

export default App;
