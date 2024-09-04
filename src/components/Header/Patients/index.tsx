import { useState } from "react"
import { Icons } from "../../../assets/icons/_index"
import * as S from "./styled"
import Modal from "../../Modal"

const PatientsHeader = () => {
  const [showingPopup, setShowingPopup] = useState(true)

  const handlePower = () => {
    setShowingPopup(!showingPopup)
  }

  return (
    <S.Component>
      <Modal role="logout" onClose={handlePower} visible={showingPopup} />

      <Icons.LogoDuo />
      <S.PageTitle>Pacientes</S.PageTitle>
      <S.Button>
        <Icons.Power onClick={handlePower} />
      </S.Button>
    </S.Component>
  )
}

export default PatientsHeader
