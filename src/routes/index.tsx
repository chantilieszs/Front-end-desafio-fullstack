import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";

import ProtectedRoutes from "../protectedRoutes";
import { DeashBoard } from "../pages/deashboard";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route element={<ProtectedRoutes />}>
      <Route path="/deashboard" element={<DeashBoard />} />
    </Route>
  </Routes>
);

export default AppRoutes;