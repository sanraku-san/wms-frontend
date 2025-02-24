import React from "react";
import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import Stores from "./pages/Stores";
import Transactions from "./pages/Transactions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionHistory from "./pages/TransactionHistory";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex
      ">  
        <Sidebar />
        <div className="flex-1  ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Stores" element={<Stores />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/THistory" element={<TransactionHistory/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
