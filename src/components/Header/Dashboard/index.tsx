import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"
import * as S from "./styled"
import Modal from "../../Modal"
import { Link } from "react-router-dom"
import Container from "../../Container"

const DashboardHeader = () => {
  const [showingPopup, setShowingPopup] = useState(false)

  const handlePower = () => {
    setShowingPopup(!showingPopup)
  }

  return (
    <S.Wrapper>
      <Container dashboard={true}>
        <S.Component>
          <Modal role="logout" onClose={handlePower} visible={showingPopup} />

          <S.BreadArea>
            <Icons.Home />
            <Link to="/patients">UTI</Link>

            <span>/</span>
            <Link to="/patients">Pacientes</Link>

            <span>/</span>
            <span>Prontuário Eletrônico do Paciente</span>
          </S.BreadArea>

          <S.Right>
            <S.SearchArea>
              <Icons.Search />
              <S.Input placeholder="Pesquisa" />
            </S.SearchArea>
            <S.Button>
              <Icons.Power onClick={handlePower} />
            </S.Button>
          </S.Right>
        </S.Component>
      </Container>
    </S.Wrapper>
  )
}

export default DashboardHeader
