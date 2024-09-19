import * as S from "./styles"

import { Field } from "../../../../../components/Field"
import { useState } from "react"

const AdmissionSubPage = () => {
  const [form, setForm] = useState({
    mainClaim: "",
    aMain: "",
    nasal: "",
    speak: "",
    temperature: "",
    bBreath: "",
    cHeart: "",
    neurological: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>Admissão</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            placeholder="Escreva aqui"
            label="Queixa principal"
            value={form.mainClaim}
            onChange={(val) => handleField("mainClaim", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.SubpageTitle>Exame Físico</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            placeholder="Escreva aqui"
            label="A:Geral"
            value={form.aMain}
            onChange={(val) => handleField("aMain", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <S.FormBlockTitle>
            <span>Via aérea pérvia</span>
          </S.FormBlockTitle>
          <Field.Multiple
            value={form.nasal}
            onChange={(val) => handleField("nasal", val)}
            options={[
              { key: "yes", name: "Sim" },
              { key: "no", name: "Não" },
            ]}
          />
          <S.FormBlockTitle>
            <span>O Paciente Fala</span>
          </S.FormBlockTitle>
          <Field.Multiple
            value={form.speak}
            onChange={(val) => handleField("speak", val)}
            options={[
              { key: "yes", name: "Sim" },
              { key: "no", name: "Não" },
            ]}
          />
          <S.FormBlockTitle>
            <span>Temperatura</span>
          </S.FormBlockTitle>
          <Field.Multiple
            value={form.temperature}
            onChange={(val) => handleField("temperature", val)}
            options={[
              { key: "yes", name: "Sim" },
              { key: "no", name: "Não" },
            ]}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="B:Respiratório"
            value={form.bBreath}
            onChange={(val) => handleField("bBreath", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Input
            placeholder="Escreva aqui"
            label="C:Circulatório"
            value={form.cHeart}
            onChange={(val) => handleField("cHeart", val)}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.Multiple
            value={form.neurological}
            onChange={(val) => handleField("neurological", val)}
            options={[
              { key: "msd", name: "MSD" },
              { key: "mse", name: "MSE" },
              { key: "mii", name: "MII" },
              { key: "pps", name: "Pupilas Isocóricas" },
              { key: "asc", name: "Antisocóreas" },
            ]}
          />
        </S.FormBlockFields>
      </S.FormLine>
    </S.Subpage>
  )
}

export default AdmissionSubPage
