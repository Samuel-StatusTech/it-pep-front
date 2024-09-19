import { useState } from "react"
import * as S from "./styles"

import Form from "../../../../../../components/Form"
import { Field } from "../../../../../../components/Field"

const AdmissionSubPage = () => {
  const [form, setForm] = useState({
    mainClaim: "",
    history: "",
    meds: "",
    phisicalExam: "",
  })

  const handleField = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <S.Subpage>
      <S.SubpageTitle>Admissão Médica</S.SubpageTitle>

      <Form
        lines={[
          {
            blocks: [
              {
                fieldLines: [
                  {
                    fields: [
                      <Field.TextArea
                        placeholder="Escreva aqui"
                        label="Queixa Principal"
                        value={form.mainClaim}
                        onChange={(val: any) => handleField("mainClaim", val)}
                        gridSize={12}
                      />,
                    ],
                  },
                  {
                    fields: [
                      <Field.TextArea
                        placeholder="Escreva aqui"
                        label="História Atual da Doença e Antecedentes Familiares"
                        value={form.history}
                        onChange={(val: any) => handleField("history", val)}
                        gridSize={12}
                      />,
                    ],
                  },
                  {
                    fields: [
                      <Field.TextArea
                        placeholder="Escreva aqui"
                        label="Medicamento em uso"
                        value={form.meds}
                        onChange={(val: any) => handleField("meds", val)}
                        gridSize={12}
                      />,
                    ],
                  },
                  {
                    fields: [
                      <Field.TextArea
                        placeholder="Escreva aqui"
                        label="Exame Físico"
                        value={form.phisicalExam}
                        onChange={(val: any) =>
                          handleField("phisicalExam", val)
                        }
                        gridSize={12}
                      />,
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
    </S.Subpage>
  )
}

export default AdmissionSubPage
