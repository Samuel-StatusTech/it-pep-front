import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

// Pages
import AuthRoute from "./AuthRoute"

import Login from "../pages/Login"
import PatientsPage from "../pages/Patients"
import Dashboard from "../pages/_Base/Dashboard"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AuthRoute />}>
          <Route path="patients">
            <Route path="" element={<PatientsPage />} />
          </Route>
          <Route path="dashboard">
            <Route path="" element={<Dashboard role="secretary" />} />
            <Route path="uti">
              <Route
                path="patient/:patientId"
                element={<Dashboard role="patient" from="uti" />}
              />
            </Route>
            <Route path="emergency">
              <Route
                path="patient/:patientId"
                element={<Dashboard role="patient" from="emergency" />}
              />
            </Route>
            <Route path="surgery">
              <Route
                path="patient/:patientId"
                element={<Dashboard role="patient" from="surgery" />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/patients"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
