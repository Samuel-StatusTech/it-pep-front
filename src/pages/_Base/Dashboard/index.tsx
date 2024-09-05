import * as S from "./styles"

import Header from "../../../components/Header"
import SideMenu from "../../../components/SideMenu"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

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

    const val = 'allergy'

    setPage(val)
  }, [location])

  return (
    <S.Page>
      <SideMenu page={page} {...props} />
      <S.Main>
        <Header.Dashboard />
      </S.Main>
    </S.Page>
  )
}

export default Dashboard
