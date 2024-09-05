import * as S from "./styles"

import Header from "../../../components/Header"
import SideMenu from "../../../components/SideMenu"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import PatientBox from "../../../components/PatientBox"
import Container from "../../../components/Container"
import AllergyPage from "../../Patient/Allergy"
import SideControl from "../../../components/SideControl"

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
    const splitted = location.pathname.split("/dashboard")

    console.log(splitted)

    const val = "allergy"

    setPage(val)
  }, [location])

  const renderPrincipal = () => {
    switch (page) {
      case "allergy":
        return <AllergyPage />
      default:
        return <></>
    }
  }

  return (
    <S.Page>
      <SideMenu page={page} {...props} />
      <S.Main>
        <Header.Dashboard />

        <Container fullHeight={true}>
          <S.Content>
            {props.role === "patient" ? <PatientBox /> : <></>}

            <S.Principal>
              {renderPrincipal()}

              <SideControl />
            </S.Principal>
          </S.Content>
        </Container>
      </S.Main>
    </S.Page>
  )
}

export default Dashboard
