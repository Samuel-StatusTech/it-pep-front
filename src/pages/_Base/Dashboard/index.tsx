import * as S from "./styles"

import Header from "../../../components/Header"
import SideMenu from "../../../components/SideMenu"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import PatientBox from "../../../components/PatientBox"
import Container from "../../../components/Container"
import AllergyPage from "../../Patient/Allergy"
import OutpatientPage from "../../Patient/Outpatient"

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
    switch (page) {
      case "allergy":
        return <AllergyPage />
      case "outpatient":
        return <OutpatientPage />
      default:
        return <></>
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

            {renderPrincipal()}
          </S.Content>
        </Container>
      </S.Main>
    </S.Page>
  )
}

export default Dashboard
