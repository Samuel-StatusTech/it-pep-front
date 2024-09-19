import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import * as S from "./styles"

import Header from "../../../components/Header"
import SideMenu from "../../../components/SideMenu"

import PatientBox from "../../../components/PatientBox"

// Secretary
import RegisterPage from "../../Secretary/Register"

// Patients
import Container from "../../../components/Container"
import AllergyPage from "../../Patient/Allergy"
import OutpatientPage from "../../Patient/Outpatient"
import UrgencyPage from "../../Patient/Urgency"
import { HospitalizationPage } from "../../Patient/Hospitalization"

type Props =
  | {
      role: "patient"
      from: "uti" | "emergency" | "surgery"
    }
  | {
      role: "secretary"
    }

const Dashboard = (props: Props) => {
  const location = useLocation()

  const [page, setPage] = useState("dash")

  useEffect(() => {
    const splitted = location.pathname.split("/")

    const val = splitted[splitted.length - 1] ?? ""

    setPage(val)
  }, [location])

  const renderPrincipal = () => {
    switch (props.role) {
      case "patient":
        switch (page) {
          case "allergy":
            return <AllergyPage />
          case "outpatient":
            return <OutpatientPage />
          case "urgency":
            return <UrgencyPage />
          case "nursery":
            return <HospitalizationPage.Nursery />
          case "maternity":
            return <HospitalizationPage.Maternity />
          case "utirecord":
            return <HospitalizationPage.UtiRecord />
          default:
            return <></>
        }
      case "secretary":
        switch (page) {
          case "register":
            return <RegisterPage />
          default:
            return <></>
        }
      default:
        return null
    }
  }

  return (
    <S.Page>
      <SideMenu page={page} {...props} />
      <S.Main>
        <Header.Dashboard />

        <Container
          styles={{ display: "flex", flexDirection: "column" }}
          fullHeight={true}
        >
          <S.Content>
            {props.role === "patient" ? <PatientBox /> : <></>}
            {props.role === "secretary" ? <PatientBox /> : <></>}

            {renderPrincipal()}
          </S.Content>
        </Container>
      </S.Main>
    </S.Page>
  )
}

export default Dashboard
