import * as S from "./styles"

import { Dropdown } from "../../../../../components/Dropdown"
import { Field } from "../../../../../components/Field"
import { useState } from "react"

const CidSubPage = () => {
  const [d1, setD1] = useState({
    version: "",
    diag: "",
    diagOpt: "",
    time: "",
    timeOpt: "",
    status: "",
  })

  const handleDiag = (info: string, value: string) => {
    setD1((d) => ({ ...d, [info]: value }))
  }

  return (
    <S.Subpage>
      <Dropdown.Cid
        title={"Diagnóstico Primário"}
        data={[
          [
            <Field.Select
              placeholder="Selecione"
              label="Versão do diagnóstico"
              value={d1.version}
              onChange={(val: string) => handleDiag("version", val)}
              options={[
                { key: "opt1", name: "Opção 1" },
                { key: "opt2", name: "Opção 2" },
                { key: "opt3", name: "Opção 3" },
              ]}
              necessary={true}
              gridSize={3}
            />,
            <Field.Input
              placeholder="Escreva aqui"
              label="Diagnostico Primário"
              value={d1.diag}
              onChange={(val) => handleDiag("diag", val)}
              gridSize={5}
            />,
            <Field.Select
              placeholder="Selecione"
              value={d1.diagOpt}
              onChange={(val: string) => handleDiag("diagOpt", val)}
              options={[
                { key: "opt1", name: "Opção 1" },
                { key: "opt2", name: "Opção 2" },
                { key: "opt3", name: "Opção 3" },
              ]}
              gridSize={3}
            />,
          ],
          [
            <Field.Input
              placeholder="Escreva aqui"
              label="Tempo de doença"
              value={d1.time}
              onChange={(val) => handleDiag("time", val)}
              gridSize={5}
            />,
            <Field.Select
              placeholder="Selecione"
              value={d1.timeOpt}
              onChange={(val: string) => handleDiag("timeOpt", val)}
              options={[
                { key: "opt1", name: "Opção 1" },
                { key: "opt2", name: "Opção 2" },
                { key: "opt3", name: "Opção 3" },
              ]}
              gridSize={3}
            />,
          ],
          [
            <Field.Select
              placeholder="Selecione"
              value={d1.status}
              onChange={(val: string) => handleDiag("status", val)}
              options={[
                { key: "opt1", name: "Opção 1" },
                { key: "opt2", name: "Opção 2" },
                { key: "opt3", name: "Opção 3" },
              ]}
              gridSize={3}
            />,
          ],
        ]}
      />
    </S.Subpage>
  )
}

export default CidSubPage
