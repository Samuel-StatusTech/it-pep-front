import { useState } from "react"
import * as S from "./styles"

import { Field } from "../../../../../components/Field"

const AmbulatorySubPage = () => {
  const [form, setForm] = useState({
    main: "",
    history: "",
    phisicalDescription: "",
    medicalUse: "",
    medsInUse: "",
    extraExaminations: "",
    conduct: "",
    date: new Date().toISOString(),
  })

  return (
    <S.Subpage>
      <S.SubpageTitle>Atendimento ambulatório</S.SubpageTitle>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            label={"Queixa principal"}
            value={form.main}
            onChange={(val: any) => setForm((f) => ({ ...f, main: val }))}
          />
        </S.FormBlockFields>
      </S.FormLine>
      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            label={"História atual da doença e antecedentes familiares"}
            value={form.history}
            onChange={(val: any) => setForm((f) => ({ ...f, history: val }))}
          />
        </S.FormBlockFields>
      </S.FormLine>
      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            label={"Descrição estado físico geral"}
            value={form.phisicalDescription}
            onChange={(val: any) =>
              setForm((f) => ({ ...f, phisicalDescription: val }))
            }
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <span>Uso de medicamentos</span>
          <Field.Multiple
            options={[
              { key: "yes", name: "Sim" },
              { key: "no", name: "Não" },
              { key: "unknown", name: "Não sei informar" },
            ]}
            value={form.medicalUse}
            onChange={(val: any) => setForm((f) => ({ ...f, medicalUse: val }))}
          />
        </S.FormBlockFields>
      </S.FormLine>

      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            label={"Queixa principal"}
            value={form.main}
            onChange={(val: any) => setForm((f) => ({ ...f, main: val }))}
          />
        </S.FormBlockFields>
      </S.FormLine>
      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            label={"História atual da doença e antecedentes familiares"}
            value={form.history}
            onChange={(val: any) => setForm((f) => ({ ...f, history: val }))}
          />
        </S.FormBlockFields>
      </S.FormLine>
      <S.FormLine>
        <S.FormBlockFields>
          <Field.TextArea
            label={"Descrição estado físico geral"}
            value={form.phisicalDescription}
            onChange={(val: any) =>
              setForm((f) => ({ ...f, phisicalDescription: val }))
            }
          />
        </S.FormBlockFields>
      </S.FormLine>
    </S.Subpage>
  )
}

export default AmbulatorySubPage
