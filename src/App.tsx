import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const authenticated = false;

  return (
    <Routes>
      <Route
        path="/"
        element={
          authenticated ? <Navigate to="/dashboard" /> : <Login />
        }
      />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
