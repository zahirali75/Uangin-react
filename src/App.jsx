import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/transactions" element={<Transactions />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/statistics" element={<Statistics />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;