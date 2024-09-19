import * as S from "./styles"

import { Field } from "../../../../../components/Field"
import { useState } from "react"

const OutmedicSubPage = () => {
  const [form, setForm] = useState({
    obs: "",
    prediction: "",
    provider: "",
    date: new Date(),
    reason: "",
    diagnosis: "",
    outDiagnosis: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>Alta Médica</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            placeholder="Escreva aqui"
            label="Observação da Alta"
            value={form.obs}
            onChange={(val) => handleField("obs", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="Predição de Alta"
            value={form.prediction}
            onChange={(val) => handleField("prediction", val)}
          />
          <Field.Input
            placeholder="Escreva aqui"
            label="Prestador"
            value={form.provider}
            onChange={(val) => handleField("provider", val)}
          />
          <S.DataGroup>
            <S.DGTitle>Data da Alta</S.DGTitle>
            <Field.BasicDate
              value={form.date}
              onChange={(val) => handleField("date", val)}
            />
          </S.DataGroup>
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="Motivo da Alta"
            value={form.reason}
            onChange={(val) => handleField("reason", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="Diagnóstico inicial"
            value={form.diagnosis}
            onChange={(val) => handleField("diagnosis", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            placeholder="Escreva aqui"
            label="Diagnóstico da Alta"
            value={form.outDiagnosis}
            onChange={(val) => handleField("outDiagnosis", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>
    </S.Subpage>
  )
}

export default OutmedicSubPage
