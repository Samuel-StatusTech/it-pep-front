import * as S from "./styles"

import { Dropdown } from "../../../../../components/Dropdown"

const SacrSubPage = () => {
  return (
    <S.Subpage>
      <Dropdown.Sacr
        title={"Classificação"}
        data={[{ info: "Nenhuma classificação indicada" }]}
      />
      <Dropdown.Sacr
        title={"Sinais vitais não lidos"}
        data={[
          { info: "Sinais Vitais", value: "Justificados" },
          { info: "Não Existem Sinais Vitais Não Coletados" },
        ]}
      />
      <Dropdown.Sacr
        title={"Alergias do paciente"}
        data={[{ info: "Paciente sem Alergia" }]}
      />
    </S.Subpage>
  )
}

export default SacrSubPage
