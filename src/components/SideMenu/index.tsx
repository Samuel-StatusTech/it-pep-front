import * as S from "./styled"

import { system } from "../../utils/system"
import SideMenuItem from "../SideMenuItem"

import { Icons } from "../../assets/icons/_index"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type TPageMenuConfig =
  | {
      role: "patient"
      from: "uti" | "emergency" | "surgery"
    }
  | {
      role: "secretary"
    }

type Props = TPageMenuConfig & {
  page: string
}

const SideMenu = (props: Props) => {
  const { page, role } = props

  // use ref ...

  const navigate = useNavigate()

  const [sideOpened, setSideOpened] = useState(false)

  const toggleSideMenu = () => {
    setSideOpened(!sideOpened)
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <S.Element $opened={sideOpened}>
      <S.BurguerWrapper $opened={sideOpened} onClick={toggleSideMenu}>
        <Icons.Burguer />
      </S.BurguerWrapper>

      <Icons.LogoDuo />

      <S.DashboardInfo>
        <S.DashName>
          {(props.role === "patient" && !!props.from) ?? "Atendimento"}
        </S.DashName>
        <S.BackDash onClick={handleBack}>
          <Icons.ArrowLine />
          <span>Lista de pacientes</span>
        </S.BackDash>
      </S.DashboardInfo>

      <S.MenuContainer>
        {(role === "secretary"
          ? system.menu.side[role]
          : system.menu.side[role as "patient"][props.from]
        ).map((item, k) => (
          <SideMenuItem
            k={k}
            key={k}
            action={toggleSideMenu}
            data={item}
            active={page === item.tag}
          />
        ))}
      </S.MenuContainer>
    </S.Element>
  )
}

export default SideMenu
