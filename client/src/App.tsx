import React, { useState } from "react";
import Home from "./scenes/home";
import Login from "./scenes/login";
import Register from "./scenes/register";
import Transfer from "./scenes/transfers";
import Payments from "./scenes/payments";
import Deposits from "./scenes/deposits";
import Withdrawls from "./scenes/withdrawls";
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="payments" element={<Payments />} />
        <Route path="deposits" element={<Deposits />} />
        <Route path="withdrawls" element={<Withdrawls />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
