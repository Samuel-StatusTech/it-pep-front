import * as S from "./styles"

import { Field } from "../../../../../components/Field"
import { useState } from "react"

const ExaminationExternalSubPage = () => {
  const [form, setForm] = useState({
    speciality: "",
    doctor: "",
    service: "",
    obs: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>Cadastro de encaminhamento</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="Especialidade"
            value={form.speciality}
            onChange={(val) => handleField("speciality", val)}
            necessary={true}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="Médico"
            value={form.doctor}
            onChange={(val) => handleField("doctor", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="Serviço"
            value={form.service}
            onChange={(val) => handleField("service", val)}
            necessary={true}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            label="Observação"
            value={form.obs}
            onChange={(val) => handleField("obs", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>
    </S.Subpage>
  )
}

export default ExaminationExternalSubPage
