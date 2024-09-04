import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

// Pages
import AuthRoute from "./AuthRoute"

import Login from "../pages/Login"
import PatientsPage from "../pages/Patients"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AuthRoute />}>
          <Route path="patients">
            <Route path="" element={<PatientsPage />} />
          </Route>
          {/* <Route path="dashboard">
            <Route path="" element={<PatientsPage />} />
          </Route> */}
        </Route>
        <Route path="*" element={<Navigate to={"/patients"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
